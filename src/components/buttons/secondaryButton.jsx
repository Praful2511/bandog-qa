import pxToEm from "../../utilies/pxToEm";

export const SecondaryButton = ({
    py = 0,
    height = 40,
    px = 14,
    radius = 6,
    fontSize = 16,
    children,
    childClassname="",
    className,
    as = "button",
    loading = false,
    ...props
}) => {

    const style = {
        padding: `${pxToEm(py)} ${pxToEm(px)}`,
        height: typeof height === "number" ? pxToEm(height) : height,
        borderRadius: pxToEm(radius),
        fontSize: pxToEm(fontSize),
      };

    return (
        <button
            {...props}
            style={style}
            className="w-full bg-[#121212] text-black text-[1em] font-semibold flex items-center justify-center disabled:opacity-60 hover:scale-[.96] disabled:hover:scale-100 ">
            {loading ? (
                <span
                    className="w-[1.6em] h-[1.6em] border-[.4em] border-l-white border-t-white border-r-dark-blue border-b-dark-blue rounded-full animate-spin"
                    style={{ animationDuration: ".4s" }}
                ></span>
            ) : (
               <span className={childClassname}>{children}</span>
            )}
        </button>
    )
}