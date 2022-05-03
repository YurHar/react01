import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.item}>
                <img src='https://d2ouvy59p0dg6k.cloudfront.net/img/tweaked_river_soca_cutting_trough_forest_slovenia_c_merc67_istock_970156772_676603_676682.jpg' />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;