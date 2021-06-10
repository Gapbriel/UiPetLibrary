import './PetList.less';
import PetCard from '../PetCard/PetCard'
import {pet}  from '../../Services/types'

type PropsList = {
    pets: [pet]
}

function PetList({ pets }: PropsList) {
    return (
        <div className="petList">
            {
                pets.map((pet: pet) => (
                    <PetCard pet={pet} />
                ))
            }
        </div>
    );
}

export default PetList;