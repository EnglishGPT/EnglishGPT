@echo off
mkdir components\ReadStory
echo. > components\ReadStory\StorySection.tsx
echo. > components\ReadStory\VocabularyList.tsx

mkdir components\Exam
echo. > components\Exam\ExamSelection.tsx
echo. > components\Exam\VocabularyExam.tsx
echo. > components\Exam\SentenceExam.tsx
echo. > components\Exam\GrammarExam.tsx

mkdir components\ShareStory
echo. > components\ShareStory\ShareButton.tsx
echo. > components\ShareStory\ShareModal.tsx

mkdir components\Common
echo. > components\Common\Header.tsx
echo. > components\Common\Footer.tsx
echo. > components\Common\Loading.tsx
echo. > components\Common\ProtectedRoute.tsx

mkdir pages
echo. > pages\Landing.tsx
echo. > pages\SignUp.tsx
echo. > pages\SignIn.tsx
echo. > pages\Dashboard.tsx
echo. > pages\Profile.tsx

mkdir store
echo. > store\rootReducer.ts
echo. > store\user.ts
echo. > store\exam.ts
echo. > store\story.ts

mkdir utils
echo. > utils\api.ts
echo. > utils\formatDate.ts

echo. > App.tsx
echo. > index.tsx
