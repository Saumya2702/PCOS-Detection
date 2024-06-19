import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const yogaSchedule = {
  Monday: [
    {
      name: 'Child\'s Pose (Balasana)',
      description: 'This pose helps to calm the mind and reduce stress. It also stretches the hips, thighs, and ankles.',
      steps: [
        '1. Kneel on the floor with your toes together and knees hip-width apart.',
        '2. Sit back on your heels and rest your torso between your thighs.',
        '3. Rest your forehead on the floor and extend your arms out in front of you with palms facing down.',
        '4. Hold for several breaths.',
      ],
      picture: 'child\'s pose.gif',
    },
    { 
      name: 'Cat-Cow Pose (Chakravakasana)',
      description: 'This pose sequence helps to improve spinal flexibility and relieve tension in the back and neck.', 
      steps: [
        '1. Get in tabletop position with your palms down, wrists and elbows aligned under shoulders, knees under hips, ankles straight back from the knees. You can curl the toes under or tops of the feet down, as the flow moves you.',
        '2. Inhale, bend the elbows, lower the belly, lift the chin and the tail bone simultaneously, moving each of the vertebrae of the spinal column in a wave.',
        '3. Reverse the movement on the exhale by tucking the tail bone and chin, and doming the back as you draw the navel toward the spine as the chin tips toward the chest.',
        '4. Repeat for desired amount of times.',
    ],
    picture: 'Cat-Cow-stretch.webp',
  },
  {
     name: 'Downward Facing Dog (Adho Mukha Svanasana)', 
     description: 'This pose strengthens the arms, legs, and core, while also stretching the hamstrings, calves, and spine.',
    steps:[
      '1.Come onto your hands and knees. Bring your hands slightly in front of your shoulders, pread your fingers wide, press down through your knuckles, and tuck your toes.',
'2. Exhale as you lift your knees and reach your hips up and back. Keep your knees slightly bent as you press the backs of your thighs toward the wall behind you and reach your heels toward the mat.',
'3. Press the base of your index fingers into the mat. Relax your neck and keep your head between your upper arms.',
'4. Breathe here. As you exhale, bend your knees and lower yourself into Child’s Pose.',
    ],
    picture:'adho.gif' }
  ],
  Tuesday: [
    { 
      name: 'Warrior I (Virabhadrasana I)', 
      description: 'This pose strengthens the legs, opens the hips and chest, and stretches the arms and legs.',
      steps:[
        '1.Start tall: Stand with feet hip-width apart.',
      '2. Lunge back: Step one foot back 3-4 feet, turning it outward 90 degrees. Turn the front foot slightly inward.',
      '3. Bend and reach: Bend your front knee to a 90-degree angle, keep the back leg straight. Inhale and raise arms overhead.',
      '4. Align and hold: Keep your torso facing forward, core engaged, and gaze up or forward. Hold for several breaths.',
      '5. Repeat on the other side.',
      ],
      picture:'warrior1.jpg',
     },
    { 
      name: 'Triangle Pose (Trikonasana)', 
      description: 'This pose stretches the legs, hips, and spine, and improves balance and stability.',
      steps:[
        '1.Stand tall with feet hip-width apart.',
        '2. Inhale, open legs to about 3 feet apart, and raise arms to shoulder level.',
        '3. Turn your right foot out, exhale, and bend sideways towards your right leg.',
        '4. Reach your right hand down towards your foot (or floor if needed), and raise your left arm up towards the ceiling.',
        '5. Keep your hips square and gaze up at your thumb or pinky finger (depending on arm position).',
        '6. Hold for a few breaths, then inhale up and repeat on the other side.',
    ],
    picture:'trikonasana.gif' },
    { 
      name: 'Bridge Pose (Setu Bandhasana)',
       description: 'This pose strengthens the back, glutes, and legs, and opens the chest and shoulders.',
      steps:[
       '1. Lie on your back with knees bent and feet flat on the floor, hip-width apart.',
       '2. Inhale, press through your feet and lift your hips up, lengthening your tailbone.',
      '3. Keep your shoulders pressed down and neck neutral. Arms can be by your side or clasped behind your back.',
      '4. Hold for a few breaths, then exhale and lower your hips back down.',
      ],
      picture:'bridge.webp',
      }
  ],
  Wednesday: [
    { 
      name: 'Seated Forward Bend (Paschimottanasana)', 
      description: 'This pose stretches the spine, shoulders, and hamstrings, and calms the mind.',
      steps: [
        '1. Sit tall with your legs extended straight in front.',
        '2. Inhale, reach your arms up overhead.',
        '3. Exhale, hinge at your hips and fold forward, reaching for your toes.',
        '4. Lengthen your spine with each inhale, and deepen the bend with each exhale.',
        '5. Hold for 30 seconds to 1 minute, breathing deeply.',
        '6. Inhale, lengthen your spine, and slowly come up to sitting.',
    ],
    picture:'paschi.gif',
  },
    { 
      name: 'Supine Spinal Twist (Supta Matsyendrasana)',
       description: 'This pose stretches the spine, shoulders, and hips, and helps to relieve tension and improve digestion.',
      steps: [
           '1. Lie on your back with arms outstretched.',
          '2. Bend one knee, bringing it to your chest.',
          '3. Gently lower that knee across your body, towards the opposite side.',
          '4. Turn your head to gaze in the same direction as the bent knee.',
          '5. Keep your lower back pressed to the ground and hold for a few breaths.',
          '6. Repeat on the other side.',
      ],
      picture:'supine.gif',
     },
    { 
      name: 'Legs-Up-the-Wall Pose (Viparita Karani)', 
      description: 'This restorative pose helps to relax the body and mind, and can relieve lower back and leg pain.',
    steps: [
        '1. Lie down on your back next to a wall.',
        '2. Scoot your hips close to the wall and swing your legs up, resting them against the wall.',
        '3. Adjust your position for comfort. You can use a pillow or bolster under your hips for support.',
       '4. Relax your arms by your sides or rest them on your belly.',
         '5. Hold for 5-10 minutes or longer, breathing deeply and slowly.',
        '6. To come out of the pose, gently bend your knees and roll to your side.',
    ], 
    picture:'viparita.gif',
  },
],
  Thursday: [
    { 
      name: 'Cobra Pose (Bhujangasana)', 
      description: 'This pose strengthens the spine and opens the chest and shoulders.',
      steps: [
      '1. Lie on your stomach with toes together and forehead on the ground.',
'2. Place your palms flat down under your shoulders, elbows close to your body.',
'3. Inhale and slowly lift your upper body, keeping your navel on the floor.',
'4. Arch your back and look slightly upwards.',
'5. Hold for a comfortable breath, then exhale and lower yourself back down.',
      ],
      picture:'cobra.webp',
    },
    { 
      name: 'Boat Pose (Navasana)',
      description: 'This pose strengthens the core, improves balance, and stretches the hamstrings.',
      steps: [
        '1. Lie on your back with arms by your sides and legs together.',
       '2. Exhale, lift your chest and feet off the ground, reaching your arms towards your feet.',
        '3. Keep your back straight, abs engaged, and gaze in line with your toes.',
        '4. Hold for a few breaths, then slowly lower back down to start.',
      ],
      picture:'boat.webp',
     },
    { 
      name: 'Child\'s Pose (Balasana)',
       description: 'This pose helps to calm the mind and reduce stress. It also stretches the hips, thighs, and ankles.',
       steps: [
        '1. Kneel on the floor with your toes together and knees hip-width apart.',
        '2. Sit back on your heels and rest your torso between your thighs.',
        '3. Rest your forehead on the floor and extend your arms out in front of you with palms facing down.',
        '4. Hold for several breaths.',
      ],
      picture:'child\'s pose.gif',
      }
  ],
  Friday: [
    { name: 'Warrior II (Virabhadrasana II)', 
      description: 'This pose strengthens the legs and arms, and opens the hips and chest.',
      steps: [
        '1. Start in Mountain Pose (Tadasana): Stand tall with feet together.',
        "2. Step Back and Turn Feet: Take a big step back with one leg, turning the front foot to 90 degrees and the back foot slightly inwards.",
        '3. Inhale and Raise Arms: Breathe in and raise your arms parallel to the ground, palms facing down.',
        '4. Bend Front Knee & Align: Exhale, bend your front knee keeping it stacked over your ankle. Keep your back leg straight and torso upright.',
        '5. Engage and Hold: Engage your core, press through your feet, and hold for several breaths. Gaze over your front hand.',
        '6. Straighten and Repeat: Inhale, straighten your front leg, and switch sides',
      ],
      picture:'warrior2.gif',
     },
    { 
      name: 'Extended Side Angle Pose (Utthita Parsvakonasana)',
       description: 'This pose stretches the legs, hips, and side body, and improves balance and stability.',
      steps: [
      '1. Stance: Begin in Tadasana (Mountain Pose), then step feet wide apart (hip-width or wider). Turn your right foot out 90 degrees, left foot slightly inward.',
      '2. Right Leg Bend: Inhale and bend your right knee until your thigh is parallel to the floor. Keep the knee aligned over your ankle',
      '3. Torso and Arms: Exhale, reach your right hand down beside your right foot. Stretch your left arm up over your left ear, palm facing forward.',
      '4. Alignment: Keep your spine long and torso upright. Press through both feet for stability.',
      '5. Hold and Switch: Hold for several breaths, then repeat on the other side.',
      ], 
      picture:'extended.gif',
    },
    { 
      name: 'Bridge Pose (Setu Bandhasana)',
       description: 'This pose strengthens the back, glutes, and legs, and opens the chest and shoulders.',
       steps:[
        '1. Lie on your back with knees bent and feet flat on the floor, hip-width apart.',
        '2. Inhale, press through your feet and lift your hips up, lengthening your tailbone.',
       '3. Keep your shoulders pressed down and neck neutral. Arms can be by your side or clasped behind your back.',
       '4. Hold for a few breaths, then exhale and lower your hips back down.',
       ],
       picture:'bridge.webp',
       },
  ],
  Saturday: [
    { 
      name: 'Downward Facing Dog (Adho Mukha Svanasana)',
       description: 'This pose strengthens the arms, legs, and core, while also stretching the hamstrings, calves, and spine.',
      steps: [
        '1. Come onto your hands and knees. Bring your hands slightly in front of your shoulders, pread your fingers wide, press down through your knuckles, and tuck your toes.',
      '2. Exhale as you lift your knees and reach your hips up and back. Keep your knees slightly bent as you press the backs of your thighs toward the wall behind you and reach your heels toward the mat.',
      '3. Press the base of your index fingers into the mat. Relax your neck and keep your head between your upper arms.',
      '4. Breathe here. As you exhale, bend your knees and lower yourself into Child’s Pose.',
      ],
      picture:'adho.gif',
     },
    { name: 'Plank Pose (Phalakasana)',
       description: 'This pose strengthens the arms, core, and legs, and improves balance and stability.',
      steps: [
        '1. Start on all fours, wrists under shoulders and knees under hips.',
        '2. Extend legs back one at a time, pressing toes into the mat.',
        '3 Engage your core and keep your back straight, forming a straight line from head to heels.',
        '4. Hold for as long as comfortable, then lower back down to tabletop.',
      ],
      picture:'plank.gif',
    },
    { name: 'Garland Pose (Malasana)', 
      description: 'It is especially good for women as it helps in UI, PCOS and pelvic health in general.',
    steps:[
      '1. Take a seat on the mat or the ground with your feet slightly wider than your hips.',
      '2. Then, bend your knees into a squat position',
      '3. Next, bring your hands together and join your palms in the ‘Namaskar’ position.',
      '4. Gently press your elbows toward your inner thighs.',
      '5. Then, try to bring your hips closer to the ground.',
      '6. Maintain a straight spine throughout the exercise.',
      '7. Then, slowly come to the original position.',   
    ],
    picture:'garland.gif',
   }
  ],
  Sunday: [
    { name: 'Restorative Yoga: Deep Breathing and Meditation', 
      description: 'This practice focuses on relaxation and stress relief through deep breathing and meditation.',
    steps: [
       '1. Inhale deeply and slowly.',
       '2. Exhale deeply and slowly.',
    ],
  picture:'restorative.gif',
},
],
};

const YogaPlanner = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(yogaSchedule[new Date().toLocaleDateString('en-US', { weekday: 'long' })]);
  const [selectedPose, setSelectedPose] = useState(null);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    const dayName = newDate.toLocaleDateString('en-US', { weekday: 'long' });
    setSelectedDay(yogaSchedule[dayName]);
    setSelectedPose(null);
  };

  const handlePoseClick = (pose) => {
    setSelectedPose(pose);
  };

  return (
    <div className="yogaplanner">
      <section className="introduction">
        <h1>Yoga-Planner for PCOS</h1>
      </section>

      <section className="calendar-section">
        <h2>Weekly Yoga Schedule</h2>
        <Calendar onChange={handleDateChange} value={date} className="yoga-calendar" />
      </section>

      <section className="daily-routine">
        <h3>Yoga Routine for {date.toLocaleDateString('en-US', { weekday: 'long' })}</h3>
        <ul>
          {selectedDay.map((pose, index) => (
            <li key={index} onClick={() => handlePoseClick(pose)} className="pose-item">
              {pose.name}
            </li>
          ))}
        </ul>
        {selectedPose && (
          <div className="pose-description">
            <h4>{selectedPose.name}</h4>
            <p>{selectedPose.description}</p>
            <ul>
              {selectedPose.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
            <img src={selectedPose.picture} alt={selectedPose.name} />
          </div>
        )}
      </section>
    </div>
  );
};

export default YogaPlanner;
