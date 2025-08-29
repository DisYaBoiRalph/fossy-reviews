import Button from '@/components/button';

interface INavBarButtonProps {
  color?: LkColorWithOnToken;
  label: string;
}
export const NavBarButton = ({
  color = 'primary',
  label,
}: INavBarButtonProps) => {
  return <Button label={label} variant="text" color={color} size='lg' />;
};
