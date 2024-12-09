import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function SignIn() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const validate = () => {
        const newErrors = {}

        if (!name) {
            newErrors.name = "Name is required";
        } else if(name.length < 2) {
            newErrors.name = "Name must be at least 2 characters";
        }

        if (!age) {
            newErrors.age = "Age is required";
        } else if (isNaN(age) || age < 18 || age > 100) {
            newErrors.age = "Enter a valid age between 18 and 100";
        }

        if (!email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Enter a valid email address";
        }

        if (!password) {
            newErrors.password = "Password is required";
        } else if (password.length < 5) {
            newErrors.password = "Password must be at least 5 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            alert("Successfully signed in!");
            navigate('/');
        } else {
            alert("Input is invalid.");
        }
    };

    return (
        <div className='flex items-center justify-center min-h-screen signin-bg'>
            <div className='p-6 bg-[#0a1118] rounded-md shadow-lg w-80'>
                <h1 className='text-xl font-bold text-center mb-4 text-white'>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor='name' className='block text-sm font-medium text-white'>Name</label>
                        <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} className={`w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring ${errors.name ? 'focus:ring-red-500' : 'focus:ring-blue-500'}`}/>{errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor='age' className='block text-sm font-medium text-white'>Age</label>
                        <input type='text' id='age' value={age} onChange={(e) => setAge(e.target.value)} className={`w-full px-3 py-2 border ${errors.age ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring ${errors.age ? 'focus:ring-red-500' : 'focus:ring-blue-500'}`}/>{errors.age && <p className="text-red-500 text-xs mt-1">{errors.age}</p>}
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='email' className='block text-sm font-medium text-white'>Email</label>
                        <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring ${errors.email ? 'focus:ring-red-500' : 'focus:ring-blue-500'}`}/>{errors.email && <p className='text-red-500 text-xs mt-1'>{errors.email}</p>}
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='password' className='block text-sm font-medium text-white'>Password</label>
                        <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} className={`w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring ${errors.password ? 'focus:ring-red-500' : 'focus:ring-blue-500'}`}/>{errors.password && <p className='text-red-500 text-xs mt-1'>{errors.password}</p>}
                    </div>
                    <button type='submit' className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-800 font-bold transition-colors mb-4 duration-300'>Sign In</button>
                </form>
                <button onClick={() => navigate('/')} className='w-full bg-gray-300 text-black font-bold py-2 rounded hover:bg-gray-600 hover:text-white transition-colors duration-300'>Go Back to Home</button>
            </div>
        </div>
    );
}