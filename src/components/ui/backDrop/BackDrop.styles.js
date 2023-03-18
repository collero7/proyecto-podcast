import styled from 'styled-components';

export const StyledBackDrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1000;

  //Para mostrar centrado el Spinner en IE11
  .p-progress-spinner {
    margin: 0;
  }

  .p-progress-spinner-circle{
    stroke: ${({ theme }) => !!theme.color && theme.color.redMedium};
    animation: p-progress-spinner-dash 1.5s ease-in-out infinite;
  }
`;