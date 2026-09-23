(function () {
  const container = document.getElementById("quiz-app");
  const title = window.QUIZ_TITLE || "確認問題";

  function shuffleChoices(q) {
    if (q.type !== "choice") return q;

    const order = q.choices.map((_, i) => i);
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }

    return {
      ...q,
      choices: order.map((i) => q.choices[i]),
      answerIndex: order.indexOf(q.answerIndex),
    };
  }

  const questions = (window.QUESTIONS || []).map(shuffleChoices);

  document.title = title;

  const heading = document.createElement("h1");
  heading.textContent = title;
  container.appendChild(heading);

  const form = document.createElement("form");
  form.id = "quiz-form";

  questions.forEach((q, qi) => {
    const card = document.createElement("div");
    card.className = "question-card";
    card.id = `q-${qi}`;

    const qTitle = document.createElement("div");
    qTitle.className = "question-title";
    const qNumber = document.createElement("span");
    qNumber.className = "q-number";
    qNumber.textContent = `Q${qi + 1}.`;
    qTitle.appendChild(qNumber);
    qTitle.appendChild(document.createTextNode(` ${q.question}`));
    card.appendChild(qTitle);

    if (q.code) {
      const pre = document.createElement("pre");
      pre.className = "code-block";
      const code = document.createElement("code");
      code.textContent = q.code;
      pre.appendChild(code);
      card.appendChild(pre);
    }

    if (q.type === "choice") {
      q.choices.forEach((choice, ci) => {
        const label = document.createElement("label");
        label.className = "choice-label";

        const input = document.createElement("input");
        input.type = "radio";
        input.name = `q-${qi}`;
        input.value = String(ci);
        label.appendChild(input);

        const span = document.createElement("span");
        span.className = "choice-text";
        span.textContent = choice;
        label.appendChild(span);

        card.appendChild(label);
      });
    } else if (q.type === "text") {
      const input = document.createElement("input");
      input.type = "text";
      input.className = "text-answer";
      input.name = `q-${qi}`;
      input.placeholder = "回答を入力";
      input.autocomplete = "off";
      card.appendChild(input);
    }

    const result = document.createElement("div");
    result.className = "result";
    result.id = `result-${qi}`;
    card.appendChild(result);

    form.appendChild(card);
  });

  container.appendChild(form);

  const controls = document.createElement("div");
  controls.className = "controls";

  const gradeBtn = document.createElement("button");
  gradeBtn.type = "button";
  gradeBtn.textContent = "採点する";
  gradeBtn.className = "grade-btn";

  const scoreDisplay = document.createElement("div");
  scoreDisplay.className = "score-display";

  controls.appendChild(gradeBtn);
  controls.appendChild(scoreDisplay);
  container.appendChild(controls);

  gradeBtn.addEventListener("click", () => {
    let correctCount = 0;

    questions.forEach((q, qi) => {
      const card = document.getElementById(`q-${qi}`);
      const resultEl = document.getElementById(`result-${qi}`);
      let isCorrect = false;

      if (q.type === "choice") {
        const checked = form.querySelector(`input[name="q-${qi}"]:checked`);
        if (checked) {
          isCorrect = parseInt(checked.value, 10) === q.answerIndex;
        }
      } else if (q.type === "text") {
        const input = form.querySelector(`input[name="q-${qi}"]`);
        const userAnswerText = input.value.trim();
        const accepted = Array.isArray(q.answer) ? q.answer : [q.answer];
        isCorrect = accepted.some(
          (a) => a.toLowerCase() === userAnswerText.toLowerCase()
        );
      }

      if (isCorrect) correctCount++;

      card.classList.remove("correct", "incorrect");
      card.classList.add(isCorrect ? "correct" : "incorrect");

      const correctAnswerText =
        q.type === "choice"
          ? q.choices[q.answerIndex]
          : Array.isArray(q.answer)
          ? q.answer[0]
          : q.answer;

      resultEl.textContent = "";

      const statusEl = document.createElement("div");
      statusEl.className = "result-status";
      statusEl.textContent = isCorrect ? "✓ 正解" : "✗ 不正解";
      resultEl.appendChild(statusEl);

      if (!isCorrect) {
        const answerEl = document.createElement("div");
        answerEl.className = "correct-answer";
        answerEl.textContent = `正解: ${correctAnswerText}`;
        resultEl.appendChild(answerEl);
      }

      const explanationEl = document.createElement("div");
      explanationEl.className = "explanation";
      explanationEl.textContent = q.explanation || "";
      resultEl.appendChild(explanationEl);
    });

    scoreDisplay.textContent = `結果: ${correctCount} / ${questions.length} 問正解`;
    scoreDisplay.scrollIntoView({ behavior: "smooth", block: "center" });
  });
})();
