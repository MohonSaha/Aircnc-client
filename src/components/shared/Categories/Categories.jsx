import React from 'react';
import Container from '../Container/Container';
import { categories } from './categoriesData';
import CategoryBox from './CategoryBox';

const Categories = () => {
    return (
        <div>
            <Container>
                <div className='pt-4 flex flex-row items-center justify-between overflow-x-auto max-h-[200px]'>
                    {
                        categories.map(item=> <CategoryBox label={item.label} icon={item.icon} key={item.label}></CategoryBox>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Categories;