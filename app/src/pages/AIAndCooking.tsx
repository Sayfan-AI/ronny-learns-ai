import { Quiz } from '../components/Quiz'
import type { QuizQuestion } from '../components/Quiz'
import { useMarkVisited } from '../hooks/useMarkVisited'
import { NextLesson } from '../components/NextLesson'
import { LessonNote } from '../components/LessonNote'
import { CompletedBadge } from '../components/CompletedBadge'
import { RelatedLessons } from '../components/RelatedLessons'
import { LessonRating } from '../components/LessonRating'
import { LessonFeedback } from '../components/LessonFeedback'
import { ReviewLaterButton } from '../components/ReviewLaterButton'
import { ShareButton } from '../components/ShareButton'
import { KeyTakeaways } from '../components/KeyTakeaways'

const LESSON_TITLE = 'AI and cooking'

const KEY_TAKEAWAYS = [
  'AI recipe apps learn your dietary preferences, what ingredients you have at home, and how much time you have — then suggest personalised meal ideas and shopping lists, cutting down on food waste and the daily "what shall we eat?" question.',
  'Smart kitchen appliances (connected ovens, air fryers, and multicookers) use AI to adjust cooking time and temperature automatically based on the food type and weight, removing the need to watch the clock.',
  'Food scanning apps use computer vision and nutrition databases to identify food from a photo and estimate calories, macros, and allergen information — making healthy eating easier to track without weighing everything.',
  'AI is helping tackle the global food waste crisis: apps like Too Good To Go use algorithms to match surplus food from restaurants and supermarkets with nearby customers, and smart fridge apps suggest recipes from ingredients about to go off.',
  "The next frontier is robotic kitchens and AI chefs — companies like Moley Robotics have built a robotic kitchen that can replicate a chef's movements, while fast-food chains are piloting AI to take orders, manage inventory, and schedule staff.",
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What does an AI recipe app primarily use to generate personalised meal suggestions?',
    options: [
      'A database of the most popular recipes searched online that week, filtered by your location',
      'Your dietary preferences, ingredients you currently have, available time, and past recipes you have enjoyed',
      'A random selection from a chef-curated library updated each month by professional cooks',
      'The nutritional guidelines set by your national health authority, cross-referenced with your age and gender',
    ],
    correctIndex: 1,
    explanation:
      'Good AI recipe apps build a profile of you over time — learning which cuisines you like, any dietary restrictions (vegetarian, gluten-free, allergies), what is currently in your fridge, and how long you want to spend cooking. Some, like Yummly and Whisk, let you scan your fridge or input your shopping list directly. The AI then suggests meals that use what you already have, reducing the impulse to order takeaway and cutting down on food that gets thrown away. The more you use them and rate recipes, the better the suggestions get.',
    hint: 'Think about what information would make a suggestion feel personal to you.',
  },
  {
    question: 'How do smart ovens and connected multicookers use AI to help with cooking?',
    options: [
      'They stream live video of the food and alert you when it looks visually ready, using colour recognition to judge doneness',
      'They connect to a recipe database and automatically adjust cooking time, temperature, and mode based on what you are cooking and its weight',
      'They order replacement ingredients from a supermarket automatically when sensors detect that the food inside is running low',
      'They use microphone sensors to detect the sounds of sizzling and boiling and adjust heat to keep the sound consistent',
    ],
    correctIndex: 1,
    explanation:
      'Smart ovens from brands like Samsung, June, and Brava use a combination of cameras, weight sensors, and AI to identify food and cook it automatically. You put a chicken in, the oven recognises it and its approximate weight, looks up the correct cooking programme, and adjusts temperature and time accordingly. Multicookers like the Instant Pot Smart can receive recipe instructions via an app — the cooker sets pressure levels, temperature, and timing itself. This removes a lot of the guesswork and makes it much harder to burn or undercook food.',
    hint: 'Think about the cooker adapting to what is inside it.',
  },
  {
    question: 'What technology do food scanning and calorie tracking apps mainly rely on?',
    options: [
      'Barcode scanning linked to manufacturer nutritional data — every packaged food must provide this data by law in most countries',
      'Computer vision AI trained on millions of food images, combined with nutritional databases, to identify food from a photo and estimate its calorie and nutrient content',
      'A manual entry system where users type in ingredients and portion sizes, which is then cross-checked against government nutritional tables',
      'Infrared sensors built into smartphones that analyse the molecular composition of food held up to the camera',
    ],
    correctIndex: 1,
    explanation:
      'Apps like Lose It!, MyFitnessPal, and Calorie Mama use computer vision — the same technology behind facial recognition — trained on enormous datasets of food photos. Point your phone at a plate of pasta carbonara and the AI identifies the dish, estimates the portion size from the image, and looks up the approximate nutritional content. It is not perfect — portion estimation from a 2D photo is difficult — but it is far faster than weighing and logging ingredients manually. Barcode scanning exists too, but only works for packaged products and does not help when you cook from scratch or eat at a restaurant.',
    hint: 'Think about what the app does when you photograph a home-cooked meal with no barcode.',
  },
  {
    question: 'How does AI help reduce food waste in the hospitality and retail sector?',
    options: [
      'AI analyses weather forecasts and local event calendars to predict footfall and automatically order the correct amount of stock, minimising over-ordering from the outset',
      'AI legally requires restaurants to report all food thrown away to a government agency, which then publishes league tables to name and shame the worst offenders',
      'AI compresses surplus food into shelf-stable powder that can be stored indefinitely and reconstituted when needed, eliminating spoilage entirely',
      'AI contacts health inspectors automatically when food is approaching its expiry date, triggering an inspection that forces the business to act',
    ],
    correctIndex: 0,
    explanation:
      'Predictive ordering is one of the most impactful uses of AI in the food industry. Systems like Winnow and Leanpath use historical sales data, weather, local events (a football match in town, a nearby concert), and seasonal patterns to forecast demand very precisely. A restaurant kitchen can reduce over-ordering by 20 to 40%. Some supermarkets use AI to place automatic replenishment orders, reducing both overstocking (food that spoils) and understocking (empty shelves). At the consumer end, apps like Too Good To Go connect restaurants and shops with surplus food to local buyers at a discount — the algorithm matches supply and demand in real time.',
    hint: 'Think about predicting how much food will be needed before it is ordered.',
  },
  {
    question: 'What is a robotic kitchen system like Moley Robotics designed to do?',
    options: [
      'Automatically clean the kitchen using robotic arms that scrub surfaces, load the dishwasher, and mop the floor without human input',
      "Replicate the hand movements of a human chef — recorded via motion capture — to cook complex dishes using standard kitchen equipment",
      'Replace all cooking utensils with single-use sealed pouches that the robot punctures and heats, similar to an automated sous vide system',
      'Use 3D printing technology to construct food layer by layer from flavoured protein and carbohydrate pastes, creating any dish digitally',
    ],
    correctIndex: 1,
    explanation:
      "Moley Robotics built a robotic kitchen with two articulated arms that can hold and use normal kitchen tools — spatulas, ladles, pots, and pans. A chef's cooking movements are captured in detail using motion capture technology (the same used for film special effects), and those movements are recorded as software. The robot can then replay those movements to cook the same dish. The idea is to build a library of 'chef recordings' — you pick a dish, the robot cooks it in your kitchen using fresh ingredients. It is expensive and not yet in mass production, but represents a real direction of travel. Meanwhile, fast-food chains are deploying simpler robots for specific tasks like flipping burgers and making coffee.",
    hint: "Think about recording and replaying a chef's physical actions.",
  },
]

export function AIAndCooking() {
  useMarkVisited('ai-and-cooking')

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F373;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and cooking
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            From recipe apps that know what is in your fridge to smart ovens that cook
            automatically — how AI is changing the way we plan, prepare, and enjoy food.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 6 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Beginner</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-cooking" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-orange-100 dark:border-orange-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The kitchen — the last room to go digital</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Smartphones changed how we communicate, stream, and shop. But for a long time, the kitchen remained largely analogue — cookbooks, timers, and recipes scrawled on Post-it notes. That is changing fast.
          </p>
          <div className="space-y-2">
            {[
              'The average UK household throws away roughly £730 worth of food each year — much of it ingredients bought with good intentions that were never used',
              'One in three adults in the UK says not knowing what to cook is their biggest daily stress at dinnertime',
              'Recipe apps have been downloaded over 100 million times worldwide — and AI is making them significantly smarter',
              'The smart kitchen appliance market is expected to reach £20 billion globally by 2027',
              'Food delivery apps already use AI to predict what you will order — now AI is helping people cook at home instead',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-orange-600 dark:text-orange-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI recipe apps — your personal sous chef</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            A good AI recipe app does not just search a database — it learns about you and gets better over time.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-green-50 dark:bg-green-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F9EA;</span>
              <div>
                <p className="font-semibold text-green-800 dark:text-green-200 text-sm mb-0.5">Yummly and Whisk</p>
                <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">These apps learn your dietary restrictions and preferences through a quick quiz, then track which recipes you save and cook. You can scan your fridge or input your shopping and they suggest meals using what you already have — cutting down on waste and those last-minute supermarket runs.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-green-50 dark:bg-green-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4AC;</span>
              <div>
                <p className="font-semibold text-green-800 dark:text-green-200 text-sm mb-0.5">ChatGPT as a meal planner</p>
                <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">Many people now use ChatGPT and similar AI assistants to plan their meals for the week, generate a shopping list, adapt recipes for the number of people eating, or substitute ingredients they do not have. Asking an AI what to make from the contents of your fridge is a genuinely useful everyday use case.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-green-50 dark:bg-green-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4C8;</span>
              <div>
                <p className="font-semibold text-green-800 dark:text-green-200 text-sm mb-0.5">Personalised shopping lists</p>
                <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">Apps like Mealime let you set how many people you are feeding, your dietary preferences, and how much time you have each night. The app generates a week's menu and a precise shopping list — covering every ingredient across all meals so nothing is bought twice or forgotten.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Smart kitchen appliances — cooking without guesswork</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The next generation of kitchen appliances uses AI to take the skill and uncertainty out of cooking.
          </p>
          <div className="space-y-2">
            {[
              'Smart ovens (Samsung, June, Brava) use cameras and weight sensors to identify food and cook it automatically at the correct temperature and time',
              'Air fryers with app connectivity allow recipes to be sent directly to the fryer — it sets temperature and time itself, and tells you when to shake the basket',
              'Connected multicookers like smart Instant Pots receive step-by-step cooking instructions from a paired app, adjusting pressure and temperature at each stage',
              'Smart thermometers monitor the core temperature of meat and tell you via your phone when it is perfectly cooked — no more cutting open a chicken to check',
              'Sous vide cookers (cooking food in a water bath at precise temperatures) have been made accessible by AI apps that manage the temperature and timing remotely',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 dark:bg-blue-950 rounded-xl p-4">
            <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">
              <span className="font-semibold">The June Oven</span> has an internal camera that identifies over 100 foods visually. Put a piece of salmon in and it knows it is salmon, estimates the thickness, and selects the cooking programme — without you pressing a single button.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-purple-100 dark:border-purple-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Food scanning and nutrition tracking</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Tracking what you eat used to mean carrying a food diary and weighing scales everywhere. AI has made it much simpler.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-purple-50 dark:bg-purple-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4F7;</span>
              <div>
                <p className="font-semibold text-purple-800 dark:text-purple-200 text-sm mb-0.5">Photograph and log</p>
                <p className="text-purple-700 dark:text-purple-300 text-sm leading-relaxed">Apps like Calorie Mama, Lose It!, and MyFitnessPal use computer vision to identify food from a photo. Point your phone at a plate of pasta, tap once, and the app logs an estimate of the calories and macronutrients. It is not perfectly accurate — estimating portion size from a photo is genuinely hard — but it is close enough to be useful and far faster than manual logging.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-purple-50 dark:bg-purple-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x26A0;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-purple-800 dark:text-purple-200 text-sm mb-0.5">Allergen awareness</p>
                <p className="text-purple-700 dark:text-purple-300 text-sm leading-relaxed">Some apps allow users to flag allergens — peanuts, gluten, dairy — and will warn when a detected food likely contains them. This is particularly useful when eating out abroad where reading the menu is difficult. However, AI allergen detection is not reliable enough to be the only safety check — it should always be used alongside direct communication with kitchen staff.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-emerald-100 dark:border-emerald-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI and food waste — a global problem with local solutions</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            One third of all food produced globally is wasted. AI is being applied at every level of the food system to reduce this.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F3EA;',
                label: 'In supermarkets',
                text: 'AI demand forecasting systems predict how much of each product will sell each day, reducing over-ordering. Some supermarkets report cutting food waste by up to 40% after implementing AI ordering systems.',
                color: 'emerald',
              },
              {
                icon: '&#x1F374;',
                label: 'In restaurants',
                text: 'Systems like Winnow use smart scales and cameras to track exactly what food is thrown away in professional kitchens. The AI identifies patterns and helps chefs adjust their orders and menus accordingly.',
                color: 'emerald',
              },
              {
                icon: '&#x1F4F1;',
                label: 'For consumers',
                text: 'Apps like Too Good To Go match surplus food from cafes, restaurants, and bakeries with nearby customers at a fraction of the normal price. The algorithm predicts which businesses will have surplus each day and notifies users in time to collect it.',
                color: 'emerald',
              },
            ].map(({ icon, label, text, color }) => (
              <div key={label} className={`flex gap-3 items-start bg-${color}-50 dark:bg-${color}-950 rounded-xl p-3`}>
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className={`font-semibold text-${color}-800 dark:text-${color}-200 text-sm mb-0.5`}>{label}</p>
                  <p className={`text-${color}-700 dark:text-${color}-300 text-sm leading-relaxed`}>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-amber-100 dark:border-amber-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Robotic kitchens and the future of cooking</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The further future of AI in cooking involves robots — not replacing home cooking, but transforming commercial food production and creating new possibilities.
          </p>
          <div className="space-y-2">
            {[
              'Moley Robotics has built a robotic kitchen with two arms that replicate recorded chef movements — you choose a dish, the robot cooks it using fresh ingredients',
              "Miso Robotics' Flippy robot has been deployed in several fast-food chains — it handles frying and grilling tasks autonomously",
              'AI is widely used in commercial food production: sorting fruit by quality, detecting foreign objects on production lines, and optimising factory schedules',
              'In high-volume fast food, AI is now taking orders via voice, managing inventory, and scheduling staff shifts based on predicted demand',
              'Future possibilities include AI-designed dishes that optimise simultaneously for nutrition, taste, sustainability, and the ingredients available locally',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-amber-600 dark:text-amber-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 dark:bg-amber-950 rounded-xl p-4">
            <p className="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">
              <span className="font-semibold">What about home cooking?</span> Most chefs and food writers agree that the joy of cooking — the creativity, the improvisation, the act of feeding people you care about — is not something AI or robots will replace at home. The technology is more likely to handle the tedious parts (chopping, monitoring temperature, managing timers) while humans retain the pleasurable, creative parts.
            </p>
          </div>
        </div>

        <LessonNote lessonId="ai-and-cooking" />
        <ReviewLaterButton lessonId="ai-and-cooking" />

        <Quiz lessonId="ai-and-cooking" questions={quizQuestions} />

        <LessonRating lessonId="ai-and-cooking" />
        <LessonFeedback lessonId="ai-and-cooking" />

        <RelatedLessons currentId="ai-and-cooking" />

        <NextLesson currentId="ai-and-cooking" />

      </div>
    </div>
  )
}
