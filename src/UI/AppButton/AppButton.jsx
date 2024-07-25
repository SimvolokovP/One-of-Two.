import './AppButton.css';

export default function AppButton({ children, ...props }) {
  return <button className="btn btn-reset" {...props}>{children}</button>;
}
