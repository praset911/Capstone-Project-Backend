// eslint-disable-next-line react/prop-types
const NavButton = ({ to, label }) => {
    const currentPath = window.location.pathname;

    return (
        <a
            href={to}
            className={`text-${
                currentPath === to ? "cyan-900" : "gray-400"
            } py-4 md:py-0 border-b border-stone-400 md:border-0`}
        >
            {label}
        </a>
    );
};

export default NavButton;
