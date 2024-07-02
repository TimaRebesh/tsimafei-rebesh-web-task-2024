/** @jsxImportSource @emotion/react */
import { IFile, ISectionElement } from 'types/types';
import { Section } from '../section/Section';
import theme from 'styles/theme';

interface IFileType {
  PDF: string;
  PNG: string;
  DOC: string;
  XXL: string;
}

const fileTypes: IFileType = {
  PDF: 'assets/icons/clipboardtext.svg',
  PNG: 'assets/icons/gallery.svg',
  DOC: 'assets/icons/documenttext.svg',
  XXL: 'assets/icons/documentcode.svg',
};

const iconStyles = {
  PDF: {
    container: { padding: '12px', background: '#FFF5F5' },
    img: `background: ${theme.colors.redColor}`
  },
  PNG: {
    container: { padding: '12px', background: '#F0FFF4' },
    img: `background: ${theme.colors.greenColor}`
  },
  DOC: {
    container: { padding: '12px', background: '#EBF8FF' },
    img: `background: ${theme.colors.blueColor}`
  },
  XXL: {
    container: { padding: '12px', background: '#FAF5FF' },
    img: `background: ${theme.colors.purpleColor}`
  },
};

export const FileSection = ({ files }: { files: IFile[]; }) => {
  const convertedData: ISectionElement[] = files.map(({ id, name, type, size }) => ({
    id,
    name,
    src: fileTypes[type as keyof IFileType],
    description: `${type}  ${size}`,
    iconStyles: iconStyles[type as keyof IFileType]
  }));
  return <Section title="Files" elements={convertedData} downloadIcon={true} />;
};


