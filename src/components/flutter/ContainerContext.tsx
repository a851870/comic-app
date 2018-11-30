import createContext, { Context } from 'create-react-context';
export interface ContainerContextState {
    gutter?: number;
    flex?: string;
  }

const ContainerContext: Context<ContainerContextState> = createContext({})

export default ContainerContext;
