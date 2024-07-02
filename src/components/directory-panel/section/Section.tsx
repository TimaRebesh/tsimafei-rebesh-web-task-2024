/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { SectionTitle } from './SectionTitle';
import { SectionElement } from './sectionElement/SectionElement';
import { ISectionElement } from 'types/types';

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 16px;
  gap: 8px;
  width: 100%;
`;

interface SectionProps {
  title: string;
  elements: ISectionElement[];
  downloadIcon?: boolean;
}

export const Section = ({ title, elements, downloadIcon }: SectionProps) => (
  <SectionContainer>
    <SectionTitle title={title} count={elements.length} />
    {elements.map((element) => (
      <SectionElement key={element.id} element={element} downloadIcon={downloadIcon} />
    ))}
  </SectionContainer>
);
