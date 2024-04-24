import { Typography } from "@mui/material"

const MuiTypography = () => {
  return (
    <div>
        <Typography variant='h1'>h1 Heading</Typography>
        <Typography variant='h2'>h2 Heading</Typography>
        <Typography variant='h3'>h3 Heading</Typography>
        <Typography variant='h4' component="h1" gutterBottom>h4 Heading</Typography>
        <Typography variant='h5'>h5 Heading</Typography>
        <Typography variant='h6'>h6 Heading</Typography>

        <Typography variant='subtitle1'>Sub Title 1</Typography>
        <Typography variant='subtitle2'>Sub Title 2</Typography>

        <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laboriosam mollitia eaque explicabo doloribus temporibus corporis animi deserunt consequatur harum maxime reiciendis nesciunt voluptate ipsa quidem, numquam aspernatur nihil neque?</Typography>
        <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, libero amet consequatur impedit illo ipsam. Debitis odio pariatur, soluta vero iusto repudiandae enim saepe impedit atque nam nihil explicabo aliquam!</Typography>
    </div>
  )
}

export default MuiTypography