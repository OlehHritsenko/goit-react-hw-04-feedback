import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const Btn = styled.button`
  width: 100px;
  height: 45px;
  color: #2a2a2a;
  font-weight: 700;
  text-transform: uppercase;
  background-color: rgba(160, 141, 196, 0.5);
  border-radius: 5px;
  border: 1px solid rgba(128, 128, 128, 0.263);
  box-shadow: 5px 5px 10px -2px rgba(132, 132, 132);
  cursor: pointer;
  &.good {
    background-color: rgba(97 233 41 / 73%);
  }
  &.neutral {
    background-color: rgba(241 225 36 / 82%);
  }
  &.bad {
    background-color: rgba(237 6 6 / 82%);
  }
  &:hover,
  &:focus,
  &:active {
    box-shadow: 5px 5px 10px -2px rgba(132, 132, 132) inset;
    transform: translate(3px, 3px);
  }
`;

export { Wrapper, Btn };