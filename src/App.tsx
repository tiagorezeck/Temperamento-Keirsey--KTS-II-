import React, { useState, useEffect } from 'react';
import { LikertValue, QuestionResponse, TestResult, UserProfile } from './types';
import { calculateKtsResult, getCompletedCount } from './utils/scoring';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { Questionnaire } from './components/Questionnaire';
import { ResultsView } from './components/ResultsView';
import { TemperamentsGuide } from './components/TemperamentsGuide';
import { AboutKts } from './components/AboutKts';
import { Footer } from './components/Footer';
import { UserProfileModal } from './components/UserProfileModal';

const STORAGE_KEYS = {
  RESPONSES: 'kts2_responses_ptbr',
  PROFILE: 'kts2_profile_ptbr',
  RESULT: 'kts2_result_ptbr',
};

export default function App() {
  const [currentTab, setCurrentTab] = useState<
    'home' | 'test' | 'temperaments' | 'about' | 'results'
  >('home');

  const [responses, setResponses] = useState<Record<number, QuestionResponse>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.RESPONSES);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [profile, setProfile] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROFILE);
      return saved ? JSON.parse(saved) : { name: '' };
    } catch {
      return { name: '' };
    }
  });

  const [result, setResult] = useState<TestResult | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.RESULT);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.RESPONSES, JSON.stringify(responses));
    } catch (e) {
      console.error('Failed to save responses in localStorage', e);
    }
  }, [responses]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile));
    } catch (e) {
      console.error('Failed to save profile in localStorage', e);
    }
  }, [profile]);

  useEffect(() => {
    try {
      if (result) {
        localStorage.setItem(STORAGE_KEYS.RESULT, JSON.stringify(result));
      } else {
        localStorage.removeItem(STORAGE_KEYS.RESULT);
      }
    } catch (e) {
      console.error('Failed to save result in localStorage', e);
    }
  }, [result]);

  const answeredCount = getCompletedCount(responses);

  const handleAnswerChoice = (questionId: number, choice: 'A' | 'B') => {
    setResponses((prev) => ({
      ...prev,
      [questionId]: {
        questionId,
        choice,
        scaleValue: choice === 'A' ? 1 : 5,
      },
    }));
  };

  const handleAnswerLikert = (questionId: number, value: LikertValue) => {
    let impliedChoice: 'A' | 'B' | null = null;
    if (value <= 2) impliedChoice = 'A';
    else if (value >= 4) impliedChoice = 'B';
    else impliedChoice = 'A'; // balanced

    setResponses((prev) => ({
      ...prev,
      [questionId]: {
        questionId,
        choice: impliedChoice,
        scaleValue: value,
      },
    }));
  };

  const handleSubmit = () => {
    const computed = calculateKtsResult(responses, profile);
    setResult(computed);
    setCurrentTab('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    if (window.confirm('Tem certeza de que deseja limpar todas as respostas registradas?')) {
      setResponses({});
      setResult(null);
      localStorage.removeItem(STORAGE_KEYS.RESPONSES);
      localStorage.removeItem(STORAGE_KEYS.RESULT);
      setCurrentTab('test');
    }
  };

  const handleFillDemo = () => {
    // Generates a coherent INTJ / NT Rational profile for demonstration
    const demoResponses: Record<number, QuestionResponse> = {};
    for (let i = 1; i <= 70; i++) {
      // Create a sensible distribution
      const isIntrovert = i % 7 === 1 ? 'B' : 'A';
      const isIntuitive = i % 7 === 2 || i % 7 === 3 ? 'B' : 'A';
      const isThinking = i % 7 === 4 || i % 7 === 5 ? 'A' : 'B';
      const isJudging = i % 7 === 6 || i % 7 === 0 ? 'A' : 'B';

      let choice: 'A' | 'B' = 'A';
      const rem = i % 7;
      if (rem === 1) choice = 'B'; // Introvert
      else if (rem === 2 || rem === 3) choice = 'B'; // Intuitive
      else if (rem === 4 || rem === 5) choice = 'A'; // Thinking
      else choice = 'A'; // Judging

      demoResponses[i] = {
        questionId: i,
        choice,
        scaleValue: choice === 'A' ? 1 : 5,
      };
    }

    setResponses(demoResponses);
    if (!profile.name) {
      setProfile((prev) => ({
        ...prev,
        name: 'Participante Demonstrativo',
        occupation: 'Pesquisa & Liderança',
        ageRange: '25 a 34 anos',
      }));
    }
  };

  const handleSaveProfile = (newProfile: UserProfile) => {
    setProfile(newProfile);
    if (result) {
      setResult({
        ...result,
        profile: newProfile,
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-slate-900 selection:text-white">
      {/* 3-Zone Navigation Header */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        hasResult={result !== null}
        answeredCount={answeredCount}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <HeroSection
            onStartTest={() => {
              setCurrentTab('test');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onExploreTemperaments={() => {
              setCurrentTab('temperaments');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            answeredCount={answeredCount}
          />
        )}

        {currentTab === 'test' && (
          <Questionnaire
            responses={responses}
            onAnswerChoice={handleAnswerChoice}
            onAnswerLikert={handleAnswerLikert}
            onSubmit={handleSubmit}
            profile={profile}
            onOpenProfile={() => setIsProfileModalOpen(true)}
            onReset={handleReset}
            onFillDemo={handleFillDemo}
          />
        )}

        {currentTab === 'results' && result && (
          <ResultsView
            result={result}
            onRetake={() => {
              setCurrentTab('test');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentTab === 'temperaments' && <TemperamentsGuide />}

        {currentTab === 'about' && <AboutKts />}
      </main>

      {/* Footer */}
      <Footer
        onSelectTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Profile Identification Modal */}
      <UserProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        onSave={handleSaveProfile}
        initialProfile={profile}
      />
    </div>
  );
}
