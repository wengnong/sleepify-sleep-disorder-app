import { useRef } from 'react'

export function Predictor({prediction, handlePredict}) {
    
    const resRef = useRef(null);

    const handleScrollToRes = () => {
        handlePredict();
        if (resRef.current) {
            resRef.current.scrollIntoView({behavior: 'smooth', block:'end'})
        }
    };

    return (
        <div className='flex flex-col justify-center mx-auto'>
            <div className='text-center'>
                <button class="mb-12 bg-[#1c3447] px-12 py-4 text-white font-medium rounded-lg text-xl hover:bg-slate-900 transition-all duration-300" id="buttonid" onClick={handleScrollToRes}>Predict</button>
            </div>

            {prediction === 0 && (
                <div className='bg-slate-200' ref={resRef}>
                    <h2 className='bg-white text-center text-2xl font-bold'>Here is your result:</h2>
                    <h3>No Disorder</h3>
                    <p>A person with no disorder (normal sleep) has no significant issues falling asleep, staying asleep, or waking up feeling refreshed.</p>
                    <h4>Causes</h4>
                    <ul>
                        <li>Healthy sleep hygiene and habits.</li>
                        <li>Balanced lifestyle with minimal stress and proper time management.</li>
                    </ul>
                    <h4>How to Manage</h4>
                    <ul>
                        <li>Maintain a regular sleep schedule: Go to bed and wake up at the same time daily.</li>
                        <li>Create a comfortable sleep environment: Keep your room cool, dark, and quiet.</li>
                        <li>Limit caffeine and alcohol: Avoid them, especially later in the day.</li>
                        <li>Exercise regularly: Engage in physical activity, but not close to bedtime.</li>
                        <li>Minimize screen time before bed: Reduce exposure to blue light from devices.</li>
                        <li>Practice relaxation techniques: Try meditation or deep breathing before bed.</li>
                    </ul>
                </div>
            )}

            {prediction === 1 && (
                <div className="insomnia-container">
                    <h3>Insomnia</h3>
                    <p>A person with insomnia involves difficulty falling or staying asleep, or waking up too early and not being able to go back to sleep.</p>
                    <h4>Causes</h4>
                    <ul>
                        <li>Stress and anxiety: Worry about work, school, health, or life events can keep your mind active at night.</li>
                        <li>Poor sleep habits: Irregular bedtimes, excessive screen time, or frequent naps.</li>
                        <li>Medical conditions: Pain, asthma, or heart problems can interfere with sleep.</li>
                        <li>Medications: Some drugs (e.g., antidepressants, heart medications) can affect sleep.</li>
                        <li>Stimulants: Caffeine, nicotine, or large meals before bed.</li>
                    </ul>
                    <h4>How to Manage</h4>
                    <ul>
                        <li>Establish a healthy sleep routine: Keep a consistent sleep schedule and make your bedroom a sleep sanctuary.</li>
                        <li>Manage stress and anxiety: Practice mindfulness, deep breathing, and progressive muscle relaxation.</li>
                        <li>Avoid naps or limit their duration: Keep naps short (20-30 minutes) and avoid them late in the day.</li>
                        <li>Get out of bed if you can't sleep: After 20 minutes of lying awake, do something relaxing.</li>
                        <li>Reduce stimulants: Limit caffeine, alcohol, and nicotine, especially in the evening.</li>
                        <li>Cognitive Behavioral Therapy for Insomnia (CBT-I): A specialized therapy that targets negative sleep habits and thoughts to improve sleep.</li>
                    </ul>
                </div>
            )}

            {prediction === 2 && (
                <div className="sleep-apnea-container">
                    <h3>Sleep Apnea</h3>
                    <p>A person with sleep apnea has a serious sleep disorder where breathing repeatedly stops and starts, leading to fragmented sleep and poor oxygenation.</p>
                    <h4>Causes</h4>
                    <ul>
                        <li>Obstructive Sleep Apnea (OSA): Caused by a blockage of the airway, usually when the soft tissue in the back of the throat collapses during sleep.</li>
                        <li>Central Sleep Apnea: Caused by the brain failing to send proper signals to the muscles that control breathing.</li>
                        <li>Risk factors: Obesity, enlarged tonsils, genetics, aging, alcohol, smoking, or sedative use.</li>
                    </ul>
                    <h4>How to Manage</h4>
                    <ul>
                        <li>Weight management: Losing excess weight can significantly improve or even eliminate symptoms.</li>
                        <li>Change sleeping positions: Sleeping on your side can prevent airway collapse and reduce apnea episodes.</li>
                        <li>Use a CPAP machine: Continuous Positive Airway Pressure (CPAP) delivers constant airflow to keep the airway open.</li>
                        <li>Avoid alcohol and sedatives: These substances relax throat muscles and worsen sleep apnea.</li>
                        <li>Perform throat exercises: Strengthening the muscles of the throat may help keep the airway open.</li>
                        <li>Treat related health issues: Conditions like hypothyroidism or nasal congestion can exacerbate sleep apnea, so treating them can help improve symptoms.</li>
                    </ul>
                </div>
            )}
        </div>
    )
}