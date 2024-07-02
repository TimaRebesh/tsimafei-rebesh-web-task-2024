export const PreloaderCircle = ({
  width = 20,
  height = 20,
}: {
  width?: number;
  height?: number;
}) =>
  <img
    src='assets/gifs/loadercircle.gif'
    width={width}
    height={height}
    alt='loading'
    style={{ borderRadius: '12px', marginLeft: '10px' }}
  />


