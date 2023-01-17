import styled from "styled-components";

const wrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-colcor: lightgrey;
`;

const Block = styled.div`
  padding: ${(props) => props.padding};
  border: 1px soild block;
  border-radios: 1rem;
  background-color: ${(props) => props.backgroundColor};
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

const blcokItems = [
  {
    label: "1",
    padding: "1rem",
    backgroundColor: "red",
  },
  {
    label: "2",
    padding: "3rem",
    backgroundColor: "green",
  },
  {
    label: "3",
    padding: "2rem",
    backgroundColor: "blue",
  },
];

function Blocks(props) {
  return(
    <wrapper>
      {blcokItems.map((blcokItems)=> {
        return (
          <Block
            padding={blcokItems.padding}
            backgroundColor={blcokItems.backgroundColor}
          >
            {blcokItems.label}
          </Block>
        );
      })}
    </wrapper>
  );
}

export default Blocks;