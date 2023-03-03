import React from "react";
import smile from "../assets/smile.png";
import people from "../assets/image.png";
import man from "../assets/man.png";

export const Post = () => {
  return (
    <div className="flex flex-column justify-center items-center py-5 px-10 top-0 w-full h-auto mt-100 my-100 pt-[200px]">
      <div>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="text-4xl font-bold text-start">
            10 Secrets for managing a <br></br>remote team{" "}
          </div>
          <div className="flex flex-row gap-8 ">
            <div className="flex flex-row gap-4 my-6 mr-[140px]">
              <img src={smile} alt="" className="h-[50px] w-[50px]" />
              <p className="text-sm text-slate-500 mt-3">Shedrack eze</p>
              <p className="text-sm text-slate-500 mt-3 ">2nd January, 2022</p>
            </div>
          </div>
        </div>
        <img src={people} alt="" className="h-[450px] w-[900px]" />
        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex flex-column justify-center items-center w-[700px] text-start pt-[50px]">
            If you’re thinking of starting a blog of your own, but just don’t
            have a clue on what to blog about, then fear not!<br></br>
            In this article, I have included a whole load of blog examples from
            a wide variety of different niches, all run on different blogging
            platforms like WordPress, Joomla! and Drupal.<br></br>
            Since the beginning of the internet, millions and millions and
            millions of blogs have been created. Many have died due to lost
            interest or their owners giving up on the idea, while others have
            thrived and continue to grow, making money and earning their owners
            a steady income.<br></br>
            It’s a constant evolution of content that keeps people coming back
            for more, especially if these blogs contact highly resourceful
            material that people find useful and interesting. Each example
            listed in this blog post are all different in some way and all bring
            something unique to their readers & subscribers. I want to show you
            what is possible and how you can take inspiration from them and
            create an awesome blog of your own.<br></br>
            Some of these blogs make over $100k a month, others are just a hobby
            for their owners, but all have the same purpose at their core… the
            love of writing and sharing information.<br></br>
            Some of these blogs make over $100k a month, others are just a hobby
            for their owners, but all have the same purpose at their core… the
            love of writing and Some of these blogs make over $100k a month,
            others are just a hobby for their owners, but all have the same
            purpose at their core… the love of writing and sharing information.
            <br></br>
            Some of these blogs make over $100k a month, others are just a hobby
            for their owners, but all have the same purpose at their core… the
            love of writing and sharing information.
          </div>
          <div className="flex mt-10 justify-start w-full">
            <img src={smile} alt="" className="h-[56px] w-[56px]" />
            <div>
              <div className="text-sm">Written by</div>
              <div className="text-lg ml-10">Shedraclk Eze</div>
              <div className="text-[#989898] ml-10">CEO Team App</div>
            </div>
          </div>
          <div className="h-[1px] w-[900px] border color-[#989898] mt-10"></div>
          <div className="text-2xl mr-[600px] mt-10 text-[#6D7D8B]">
            Join the conversation
          </div>
          <img
            src={man}
            alt=""
            className="h-[56px] w-[56px] mt-10 mr-[830px]"
          />
          <textarea
            placeholder="Comments"
            className="w-[630px] h-[148px] border-2 relative bottom-[50px] right-[50px]"
          />
        </div>
      </div>
    </div>
  );
};
