import { useRef } from "react";

function HomePage () {
    const emailInputRef = useRef()
    const feedbackInputRef = useRef()
    const submitHandler = (event) =>{
        event.preventDefault();
        const email = emailInputRef.current.value;
        const feedback = feedbackInputRef.current.value;

         
    }
    return <div>
        <h1>
        This is home page
    </h1>
    <form onSubmit={submitHandler}>
        <div>
            <label htmlFor="email">Enter your email</label>
            <input type="email" name="email" id="email" placeholder="Enter your email address" ref={emailInputRef}/>
        </div>
        <div>
            <label htmlFor="feedback">Enter your feedback</label>
            <textarea name="feedback" id="feedback" type="text" ref={feedbackInputRef}></textarea>
        </div>
        <button>send feedback</button>
    </form>
    </div>
}
export default HomePage