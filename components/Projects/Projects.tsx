// Styled Components
import styled from "styled-components";

// Components
import Project from "./Project/Project";

interface Props {}

const Projects = (props: Props) => {
  return (
    <Wrapper>
      <div className="content">
        <Project
          repoLink={"https://github.com/xIceyyx/GoblinStore"}
          readmeLink={
            "https://github-readme-stats.vercel.app/api/pin/?username=xIceyyx&repo=GoblinStore"
          }
          image={
            "https://cdn.discordapp.com/attachments/771433993744678972/879131020723617802/unknown.png"
          }
          projectLink={"https://vibrant-haibt-14a9d6.netlify.app/"}
        />

        <Project
          repoLink={"https://github.com/xIceyyx/apple-clone"}
          readmeLink={
            "https://github-readme-stats.vercel.app/api/pin/?username=xIceyyx&repo=apple-clone"
          }
          image={
            "https://cdn.discordapp.com/attachments/771433993744678972/881014764283785246/unknown.png"
          }
          projectLink={"https://upbeat-euler-c705fb.netlify.app/"}
        />

        <Project
          repoLink={"https://github.com/xIceyyx/Sunnyside"}
          readmeLink={
            "https://github-readme-stats.vercel.app/api/pin/?username=xIceyyx&repo=Sunnyside"
          }
          image={
            "https://cdn.discordapp.com/attachments/771433993744678972/881015745138528305/unknown.png"
          }
          projectLink={"https://keen-pare-98427e.netlify.app/"}
        />
      </div>
    </Wrapper>
  );
};

export default Projects;

const Wrapper = styled.div`
  width: 100%;
  padding: 0 10px;
  height: min-content;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  .content {
    height: min-content;
    width: 1275px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;
