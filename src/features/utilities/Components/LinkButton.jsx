import { Link, useNavigate } from 'react-router-dom';

function LinkButton({ children, to }) {
  const className = 'text-sm text-yellow-500 hover:text-yellow-800';
  const navigate = useNavigate();
  if (to === -1)
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;
