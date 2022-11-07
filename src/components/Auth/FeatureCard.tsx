interface IProps {
  content: string,
  Icon: JSX.Element
}

const FeatureCard = ({ Icon, content }: IProps) => (
  <div className='flex items-center px-2 py-4 rounded-md h-[100px] bg-dark-3 gap'>
    <div className='flex items-center justify-center dark:bg-dark-4 w-[60px] h-[60px] rounded-lg mx-4 px-8'>
      <p>{Icon}</p>
    </div>
    <p className='text-[18px]'>{content}</p>
  </div>
);

export default FeatureCard;
