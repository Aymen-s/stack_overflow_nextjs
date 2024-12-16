import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

export default function Home() {
  const questions = [
    {
      _id: 1,
      title: "Cascading Deletes in SQLAlchemy?",
      tags: [
        { _id: "1", name: "python" },
        { _id: "2", name: "sql" },
      ],
      author: {
        _id: "a1",
        name: "John Doe",
        picture: "https://example.com/john-doe.jpg",
      },
      upvotes: 1500000,
      views: 500552,
      answers: [
        {
          _id: 1,
          content: "You can use `cascade` to handle this in SQLAlchemy.",
        },
        { _id: 2, content: "Check the documentation for cascade rules." },
      ],
      createdAt: new Date("2024-09-01"),
    },
    {
      _id: 2,
      title: "Understanding Promises in JavaScript?",
      tags: [
        { _id: "3", name: "javascript" },
        { _id: "4", name: "promises" },
      ],
      author: {
        _id: "a2",
        name: "Jane Smith",
        picture: "https://example.com/jane-smith.jpg",
      },
      upvotes: 25,
      views: 150,
      answers: [
        { _id: 3, content: "Promises help in handling async operations." },
      ],
      createdAt: new Date("2021-10-10"),
    },
    {
      _id: 3,
      title: "How to optimize React performance?",
      tags: [
        { _id: "5", name: "react" },
        { _id: "5", name: "performance" },
      ],
      author: {
        _id: "a3",
        name: "Alice Johnson",
        picture: "https://example.com/alice-johnson.jpg",
      },
      upvotes: 40,
      views: 500,
      answers: [
        { _id: 4, content: "Use memoization and React.memo." },
        {
          _id: 5,
          content: "Avoid unnecessary re-renders by optimizing state updates.",
        },
      ],
      createdAt: new Date("2021-11-15"),
    },
  ];

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no question to show"
            link="/ask-question"
            linkTitle="Ask a Question"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the
        discussion. our query could be the next big thing others learn from. Get
        involved? 💡"
          />
        )}
      </div>
    </>
  );
}
