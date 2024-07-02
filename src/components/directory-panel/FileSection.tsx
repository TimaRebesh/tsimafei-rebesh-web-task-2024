/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { IFile } from 'types/types';
import theme from 'styles/theme';

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 16px;
  gap: 8px;
  width: 362px;
`;

const SectionTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
  width: 137px;
  height: 22px;
`;

const Title = styled.div`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  color: #000000;
`;

const NumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2px 8px;
  gap: 10px;
    background: ${theme.colors.backgroundSecondary};
  border-radius: 24px;
  width: 24px;
  height: 22px;
`;

const Number = styled.div`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  color: #000000;
`;

const FileCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  gap: 16px;
  width: 330px;
  height: 72px;
  background: #FFFFFF;
  border-radius: 12px;
`;

const FileIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 17px;
  gap: 10px;
  width: 48px;
  height: 48px;
  background: 'red';
  border-radius: 12px;
`;

const FileDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 202px;
  height: 39px;
`;

const FileName = styled.div`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  color: #000000;
`;

const FileMeta = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  color: rgba(0, 0, 0, 0.4);
`;

const FileSection = ({ files }: { files: IFile; }) => (
  <SectionContainer>
    {/* <SectionTitle>
      <Title>Files</Title>
      <NumberContainer>
        <Number>{files.length}</Number>
      </NumberContainer>
    </SectionTitle>
    {files.map(file => (
      <FileCard key={file.id}>
        <FileIconContainer bgColor={file.bgColor}>
          <img src={file.icon} alt="file icon" width="24" height="24" />
        </FileIconContainer>
        <FileDetails>
          <FileName>{file.name}</FileName>
          <FileMeta>
            <div>{file.type}</div>
            <div>{file.size}</div>
          </FileMeta>
        </FileDetails>
      </FileCard>
    ))} */}
  </SectionContainer>
);

export default FileSection;
