import styled from "styled-components";
import { Link as BaseLink } from "@reach/router";
import {
  AppBar as BaseAppBar,
  Container as BaseContainer,
} from "@material-ui/core";

export const ToolbarOffset = styled.div`
  ${({ theme }) => theme.mixins.toolbar}
`;

export const Root = styled.div`
  display: flex;
  flex: 1;
`;

export const Container = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
`;

export const AppBar = styled(BaseAppBar)`
  z-index: ${(props) => props.theme.zIndex.drawer + 1};
`;

export const Link = styled(BaseLink)`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
