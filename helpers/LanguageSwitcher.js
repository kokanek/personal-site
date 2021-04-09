
import Popover from '../components/Popover'

const LanguageSwitcher = ({ position = 'bottom', positionOpen = 'top' }) => {
    return (
        <Popover label={'Technologies'}>
          Javascript, React.js, Node.js, Next.js, Angular 8, Typescript
        </Popover>
    )
}

export default LanguageSwitcher;