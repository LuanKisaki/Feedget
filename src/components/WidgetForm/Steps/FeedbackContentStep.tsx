import { ArrowLeft, Camera } from "phosphor-react";
import { useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton"
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
    onFeedbackRestartRequested: () => void;
}


export function FeedbackContentStep({
    feedbackType, 
onFeedbackRestartRequested
}: FeedbackContentStepProps) {
    const [screenshot, setScreenshot] =  useState<string | null>(null) 

    const feedbackTypeInfo = feedbackTypes[feedbackType];
    
    return (
        <>
            <header>
                <button
                    type="button"
                    className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
                    onClick={onFeedbackRestartRequested} >
                <ArrowLeft weight="bold" className="w-4 h-4"/>
                </button>
  
            <span className="text-xl leading-6 flex items-center gap-2" >
                <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6" />
                {feedbackTypeInfo.title}
     
            </span>

                <CloseButton />
            </header>
            
            <form className="my-4 w-full">
                <textarea
                    className="min-w-[384px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-zinc-800 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500  focus:ring-1 focus:outline-none resize-none scrollbar  scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
                    placeholder="Conte com detalhes o que está acontecendo..."
                />  

                <footer className="flex gap-2 mt-2">
                <ScreenshotButton 
                    screenshot={screenshot}
                    onScreenshotTook ={setScreenshot}
                />


                    <button
                    type="submit"
                    className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-ring-900 focus:ring-offset-zinc-900 focus:ring-brand-500"
                    >
                        Enviar Feedback
                    </button>
                </footer>
            </form>
        </>
    )
}