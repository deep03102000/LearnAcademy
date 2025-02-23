import React from 'react';

function HeroSection() {
    return (
        <div className='relative h-[50vh] w-full sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[85vh]'>
            <div className='absolute inset-0 bg-gradient-to-b from-black/10 to-black/55 dark:from-white/15 dark:to-black/40'>
                <div className='absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20'>
                    <div className='relative container mx-auto px-6 md:px-12 lg:px-16 h-full flex flex-col justify-center'>
                        <div className='max-w-3xl text-center md:text-left space-y-6'>
                            <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent'>
                                Master Future-Ready Skills with LearnAcademy
                            </h1>
                            <p className='text-lg sm:text-xl text-muted-foreground'>
                                Unlock your potential with expert-led courses and innovative learning experiences. 
                                Learn, grow, and shape your future today!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
