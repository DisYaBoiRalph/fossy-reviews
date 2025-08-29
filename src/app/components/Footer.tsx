import Section from '@/components/section';
import Text from '@/components/text';

export const Footer = () => {
  return (
    <Section className='border-t' padding='sm' style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
      <Text>Footer Test Copyright lol</Text>
    </Section>
  );
};
