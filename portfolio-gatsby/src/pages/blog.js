import * as React from "react";
import PageLayout from "../components/PageLayout";
import BasicPage from "../components/BasicPage";
import Stack from "../components/Stack";
import Text from "../components/Text";
import Icon from "../components/Icon";
import Link from "../components/Link";

const BookPost = (props) => (
  <Stack>
    <Text bold sans tight color="strong" size={6}>
      <Icon icon="book" /> {props.title}
    </Text>
    <Text weight={500} sans color="weak" size={4}>
      {props.author} ({props.year})
    </Text>
    <Text>{props.comments}</Text>
  </Stack>
);

const PaperPost = (props) => (
  <Stack>
    <Text bold sans tight color="strong" size={6}>
      <Icon icon="file-lines" /> {props.title}
    </Text>
    <Text weight={500} sans color="weak" size={4}>
      {props.author} ({props.year})
    </Text>
    <Text>{props.comments}</Text>
  </Stack>
);

const BlogPost = (props) => (
  <Stack>
    <Link href={props.url} target="_blank">
      <Text bold sans tight color="strong" size={6}>
        <Icon icon="pen-clip" /> {props.title}
      </Text>
    </Link>
    <Text weight={500} sans color="weak" size={4}>
      {props.author} ({props.year})
    </Text>
    <Text>{props.comments}</Text>
  </Stack>
);

const YouTubePost = (props) => (
  <Stack>
    <Text bold sans tight color="strong" size={6}>
      <Icon icon={["fab", "youtube"]} /> {props.title}
    </Text>
    <Text>{props.description}</Text>
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${props.id}`}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </Stack>
);

const IndexPage = () => {
  return (
    <PageLayout>
      <BasicPage>
        <Stack gap={10}>
          <BookPost
            title="A Philosophy of Software Design"
            author="John Ousterhout"
            year="2018"
            comments="Still reading"
          />
          <BlogPost
            title="The TypeScript Tax"
            author="Eric Elliot"
            year="2019"
            url="https://medium.com/javascript-scene/the-typescript-tax-132ff4cb175b"
            comments="Very nice"
          />
          <BookPost
            title="Domain Driven Design"
            author="Eric Evans"
            year="2003"
            comments="I enjoy Evans' writing a lot, it's very clear. I think the ideas discussed in this book are most suitable for programmers writing code for very high stakes applications, where it's crucial to get things right. For most apps, this approach is overkill"
          />
          <PaperPost
            title="Static Typing Where Possible, Dynamic Typing When Needed: The End of the Cold War Between Programming Languages"
            author="Eric Meijer, Peter Drayton"
            year="2004"
            url="http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.69.5966&rep=rep1&type=pdf"
            comments="Love it"
          />
          <BookPost
            title="Clean Architecture"
            author="Robert Martin"
            year="2017"
            comments="Uncle bob is showing his age, but still some great ideas in this book"
          />
          <YouTubePost
            title="Scrum et al."
            id="IyNPeTn8fpo"
            description="This video explains why scrum works"
          />
          <BookPost
            title="The Phoenix Project"
            author="Gene Kim, Kevin Behr, and George Spafford"
            year="2013"
            comments="Very interesting"
          />
          <BookPost
            title="Continuous discovery habits"
            author="Teresa Torres"
            year="1999"
            comments="I enjoy Evans' writing a lot, it's very clear. I think the ideas discussed in this book are most suitable for programmers writing code for very high stakes applications, where it's crucial to get things right. For most apps, this approach is overkill"
          />
          <BookPost
            title="Clean Code"
            author="Robert Martin"
            year="2008"
            comments="Uncle bob is showing his age, but still some great ideas in this book"
          />
          <BookPost
            title="Head First Design Patterns"
            author="Eric Freeman, Elisabeth Robson, Bert Bates, Kathy Sierra"
            year="2004"
            comments="Fantastic intro to design patterns"
          />
          <BookPost
            title="The Pragmatic Programmer"
            author="Andy Hunt, Dave Thomas"
            year="1999"
            comments="Invaluable book to read for programmers"
          />
          <YouTubePost
            title="The Secret of Simple Code"
            id="F-JvvFlYcts"
            description="Love this clip of Eric Elliot discussing the art of abstraction"
          />
        </Stack>
      </BasicPage>
    </PageLayout>
  );
};

export default IndexPage;
