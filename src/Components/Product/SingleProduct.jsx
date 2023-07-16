import React, { useContext, useState } from 'react';
import styles from '@/styles/Product/singleProduct.module.css';
import { ProductContext } from '../../Context.js';
import { AiOutlineArrowRight, AiOutlineLeft } from 'react-icons/ai';
import { OurProductData } from '@/Components/content';
import { ProductImages } from '@/Components/content';
import Image from 'next/image';

function SingleProduct() {

    const { product } = useContext(ProductContext);
    const Element = OurProductData.find((element) => element.title === product);
    const ElementImages = ProductImages.filter((data) => data.title === Element?.title);

    const [Btn, setBtn] = useState("SEE MORE");
    const [toShow, setToShow] = useState(9)

    const handleClick = (e) => {
        e.preventDefault();
        if(Btn == 'SEE MORE') {
            setToShow(ElementImages.length);
            setBtn("SEE LESS");
        }else{
            setToShow(9);
            setBtn("SEE MORE")
        }
    }

    const DisplayImage = ElementImages.slice(0, toShow)


    return (
        <div className={styles.singleProductWrap}>
            <div className={styles.pageTitle}>
                <span><AiOutlineLeft /></span>
                <h2>Our Products</h2>
            </div>
            <div className={styles.pageContent}>
                <h3>{Element?.title}</h3>
                <p>{Element?.content}</p>
                <div className={styles.ImageContainer}>
                    {
                        DisplayImage.map((item, index) => (
                            <div className={styles.singleImageContainer} key={index}>
                                <Image src={item.img} width={1000} height={1000} className={styles.singleImage} alt="Image"/>
                                <div className={styles.guoteBtn}>Get Quote <span><AiOutlineArrowRight /></span></div>
                                <div className={styles.overlay}></div>
                            </div>
                        ))
                    }
                </div>
                <button className={styles.singlePorductButton} onClick={handleClick}>
                    {Btn}
                </button>
            </div>
        </div>
    );
}

export default SingleProduct;