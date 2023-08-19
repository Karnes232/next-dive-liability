export const medicalStatement =
  "Recreational scuba diving and freediving requires good physical and mental health. There are a few medical conditions which can be hazardous while diving, listed below. Those who have, or are predisposed to, any of these conditions, should be evaluated by a physician. This Diver Medical Participant Questionnaire provides a basis to determine if you should seek out that evaluation. If you have any concerns about your diving fitness not represented on this form, consult with your physician before diving. If you are feeling ill, avoid diving. If you think you may have a contagious disease, protect yourself and others by not participating in dive training and/ or dive activities. References to “diving” on this form encompass both recreational scuba diving and freediving. This form is principally designed as an initial medical screen for new divers, but is also appropriate for divers taking continuing education. For your safety, and that of others who may dive with you, answer all questions honestly."

export const medicalQuestions = [
  {
    question:
      "I have had problems with my lungs, breathing, heart and/or blood affecting my normal physical or mental performance.",
    Id: "lung",
    secondaryQuestions: [
      {
        question:
          "Chest surgery, heart surgery, heart valve surgery, an implantable medical device (eg, stent, pacemaker, neurostimulator), pneumothorax, and/or chronic lung disease.",
        Id: "heartSurgey",
      },
      {
        question:
          "Asthma, wheezing, severe allergies, hay fever or congested airways within the last 12 months that limits my physical activity/exercise.",
        Id: "Asthma",
      },
      {
        question:
          "A problem or illness involving my heart such as: angina, chest pain on exertion, heart failure, immersion pulmonary edema, heart attack or stroke, OR am taking medication for any heart condition.",
        Id: "heartAttack",
      },
      {
        question:
          "Recurrent bronchitis and currently coughing within the past 12 months, OR have been diagnosed with emphysema.",
        Id: "bronchitis",
      },
      {
        question:
          "Symptoms affecting my lungs, breathing, heart and/or blood in the last 30 days that impair my physical or mental performance.",
        Id: "DayBreathing",
      },
    ],
  },
  {
    question: "I am over 45 years of age.",
    Id: "age",
    secondaryQuestions: [
      {
        question: "I currently smoke or inhale nicotine by other means.",
        Id: "Smoker",
      },
      {
        question: "I have a high cholesterol level.",
        Id: "cholesterol",
      },
      {
        question: "I have high blood pressure.",
        Id: "bloodPressure",
      },
      {
        question:
          "I have had a close blood relative die suddenly or of cardiac disease or stroke before the age of 50, OR have a family history of heart disease before age 50 (including abnormal heart rhythms, coronary artery disease or cardiomyopathy).",
        Id: "relativeBefore50",
      },
    ],
  },
  {
    question:
      "I struggle to perform moderate exercise (for example, walk 1.6 kilometer/one mile in 14 minutes or swim 200 meters/yards without resting), OR I have been unable to participate in a normal physical activity due to fitness or health reasons within the past 12 months.**",
    Id: "exercise",
    secondaryQuestions: [],
  },
  {
    question:
      "I have had problems with my eyes, ears, or nasal passages/sinuses.",
    Id: "ENT",
    secondaryQuestions: [
      {
        question: "Sinus surgery within the last 6 months.",
        Id: "sinusSurgery",
      },
      {
        question:
          "Ear disease or ear surgery, hearing loss, or problems with balance.",
        Id: "balance",
      },
      {
        question: "Recurrent sinusitis within the past 12 months.",
        Id: "sinusitis",
      },
      {
        question: "Eye surgery within the past 3 months.",
        Id: "eyeSurgery",
      },
    ],
  },
  {
    question:
      "I have had surgery within the last 12 months, OR I have ongoing problems related to past surgery.**",
    Id: "surgery",
    secondaryQuestions: [],
  },
  {
    question:
      "I have lost consciousness, had migraine headaches, seizures, stroke, significant head injury, or suffer from persistent neurologic injury or disease.",
    Id: "neurologic",
    secondaryQuestions: [
      {
        question:
          "Head injury with loss of consciousness within the past 5 years.",
        Id: "headInjury",
      },
      {
        question: "Persistent neurologic injury or disease.",
        Id: "neurologicInjury",
      },
      {
        question:
          "Recurring migraine headaches within the past 12 months, or take medications to prevent them.",
        Id: "migraine",
      },
      {
        question:
          "Blackouts or fainting (full/partial loss of consciousness) within the last 5 years.",
        Id: "blackouts",
      },
      {
        question:
          "Epilepsy, seizures, or convulsions, OR take medications to prevent them.",
        Id: "epilepsy",
      },
    ],
  },
  {
    question:
      "I am currently undergoing treatment (or have required treatment within the last five years) for psychological problems, personality disorder, panic attacks, or an addiction to drugs or alcohol; or, I have been diagnosed with a learning or developmental disability.",
    Id: "psychological",
    secondaryQuestions: [
      {
        question:
          "Behavioral health, mental or psychological problems requiring medical/psychiatric treatment",
        Id: "behavioral",
      },
      {
        question:
          "Major depression, suicidal ideation, panic attacks, uncontrolled bipolar disorder requiring medication/psychiatric treatment.",
        Id: "depression",
      },
      {
        question:
          "Been diagnosed with a mental health condition or a learning/developmental disorder that requires ongoing care or special accommodation.",
        Id: "specialAccommodation",
      },
      {
        question:
          "An addiction to drugs or alcohol requiring treatment within the last 5 years.",
        Id: "addiction",
      },
    ],
  },
  {
    question: "I have had back problems, hernia, ulcers, or diabetes.",
    Id: "backProblems",
    secondaryQuestions: [
      {
        question:
          "Recurrent back problems in the last 6 months that limit my everyday activity.",
        Id: "recurrent",
      },
      {
        question: "Back or spinal surgery within the last 12 months.",
        Id: "backSurgery",
      },
      {
        question:
          "Diabetes, either drug or diet controlled, OR gestational diabetes within the last 12 months",
        Id: "diabetes",
      },
      {
        question: "An uncorrected hernia that limits my physical abilities.",
        Id: "hernia",
      },
      {
        question:
          "Active or untreated ulcers, problem wounds, or ulcer surgery within the last 6 months.",
        Id: "ulcers",
      },
    ],
  },

  {
    question:
      "I have had stomach or intestine problems, including recent diarrhea.",
    Id: "stomach",
    secondaryQuestions: [
      {
        question:
          "Ostomy surgery and do not have medical clearance to swim or engage in physical activity.",
        Id: "ostomySurgery",
      },
      {
        question:
          "Dehydration requiring medical intervention within the last 7 days.",
        Id: "dehydration",
      },
      {
        question:
          "Active or untreated stomach or intestinal ulcers or ulcer surgery within the last 6 months.",
        Id: "activeUlcers",
      },
      {
        question:
          "Frequent heartburn, regurgitation, or gastroesophageal reflux disease (GERD).",
        Id: "heartburn",
      },
      {
        question:
          "Active or uncontrolled ulcerative colitis or Crohn's disease.",
        Id: "crohn",
      },
      {
        question: "Bariatric surgery within the last 12 months.",
        Id: "bariatric",
      },
    ],
  },
  {
    question:
      "I am taking prescription medications (with the exception of birth control or or anti-malarial drugs other than mefloquine (Lariam).**",
    Id: "drugs",
    secondaryQuestions: [],
  },
]
