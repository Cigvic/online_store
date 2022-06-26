import Icons from "components/Icons/Icons";

const social = [
  {
    icon: Icons.fb,
    to: '/home'
  },
  {
    icon: Icons.instagram,
    to: '/home'
  }
]

const paymentMethods = [
  {
    icon: Icons.paypal,
    to: '/home'
  },
  {
    icon: Icons.visa,
    to: '/home'
  },
  {
    icon: Icons.masterCard,
    to: '/home'
  },
  {
    icon: Icons.discover,
    to: '/home'
  },
  {
    icon: Icons.americanExpress,
    to: '/home'
  }
]
const data = {
  paymentMethods: paymentMethods,
  social: social
}
export default data;
