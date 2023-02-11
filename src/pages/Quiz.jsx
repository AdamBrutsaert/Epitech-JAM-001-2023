import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuestion } from "components/Quiz/useQuestion";

import Question from "components/Quiz/Question";
import Layout from "components/Layout";
import ProgressBar from "components/Quiz/Progressbar";

const Index = () => {
  const [question, score, next] = useQuestion("quiz");
  const [attempt, setAttempt] = useState(0);

  const onAnswer = (status) => {
    setAttempt((previous) => previous + 1);
    next(status);
  };

  return (
    <Layout>
      {score && score.answered !== score.total && (
        <div className="flex items-center justify-center">
          <ProgressBar actual={score.answered} total={score.total} />
        </div>
      )}
      <div className="flex h-full flex-col items-center justify-center">
        {score && score.total !== score.answered && (
          <Question key={attempt} question={question} onAnswer={onAnswer} />
        )}
        {score && score.total === score.answered && (
          <>
            <div className="mb-16 flex items-center text-white">
              <span className="text-8xl">{score.errors}</span>
              <span className="ml-4 text-lg font-semibold"> error(s)</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to={`/`}
                className="rounded-xl bg-[#383838] p-4 text-sm font-semibold uppercase tracking-wide text-white"
              >
                Menu
              </Link>
              <button
                onClick={() => {
                  window.location.reload(true);
                }}
                className="rounded-xl bg-blue-500 p-4 text-sm font-semibold uppercase tracking-wide text-white"
              >
                Rejouer
              </button>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Index;
