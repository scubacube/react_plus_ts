import styled from "styled-components";
import { ITask } from "../../types";

export const TaskItem = styled.li<ITask>`
  list-style: none;
  color: black;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 5px 10px;
  border-radius: 3px;
  margin-bottom: 10px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;
