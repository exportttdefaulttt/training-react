// import Statistics from '@/components/Statistics';
// import BonusChart from '@/components/BonusChart';

// import './Header.scss';

// const Header = () => {
    
//     return (
//         <header className="header">
//             <div className="header__left">
//                 <p className="header__subtitle">
//                     Company N
//                 </p>

//                 <h1 className="header__title">
//                     Учет сотрудников
//                 </h1>

//                 <p className="header__description">
//                     Управление сотрудниками,
//                     заработной платой и премиями
//                 </p>

//                 <Statistics />
//             </div>

//             <div className="header__right">
//                 <BonusChart />
//             </div>
//         </header>
//     );
// };

// export default Header;

import Statistics from '@/components/Statistics';
import BonusChart from '@/components/BonusChart';

import './Header.scss';

const Header = () => {
    
    return (
        <header className="header">
            <p className="header__subtitle">
                Company N
            </p>

            <h1 className="header__title">
                Учет сотрудников
            </h1>

            <p className="header__description">
                Управление сотрудниками,
                заработной платой и премиями
            </p>


            <div className="header__bottom">
                <Statistics />
                <BonusChart />
            </div>
        </header>
    );
};

export default Header;