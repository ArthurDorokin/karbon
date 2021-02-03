import React, {useState, useEffect} from 'react';
import {useSelector} from "react-redux";
import {Button, Card, CardContent, Container, Grid, makeStyles, Typography} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    main: {
        margin: '100px 0 0 0'
    },
    countVal: {
        display: 'flex',
        alignItems: 'center'
    },
    margin: {
        margin: '0 10px'
    }
}))


const EditPage = () => {
    const editPageData = useSelector(state => state.editPageData.editPageData);
    const [mapProducts, setMapProducts] = useState();
    const [isCount, setIsCount] = useState();
    const [merchantIdx, setMerchantIdx] = useState();
    const classes = useStyles();

    const k = editPageData?.products?.map((m) => {
        return [Object.values(m)]
    })
    const isMerchantIdx = editPageData.options?.map(item => item.merchantIdx)
    const count = editPageData?.products?.map(item => item.count)

    const increment = () => {
        setIsCount(isCount + 1)
    }

    const decrement = () => {
        setIsCount(isCount - 1)
    }
    console.log(merchantIdx);

    useEffect(() => {
        setMapProducts(k)
        if (editPageData?.products) {
            setIsCount(count[0])
        }
        if (editPageData?.options) {
            setMerchantIdx(isMerchantIdx[1])
        }
    }, [])



    return (

        <Container className={classes.main} maxWidth="md">
            <Grid container>
                <Card>
                    <CardContent>
                        <Typography><div className="driver">driver - {editPageData.driver ? editPageData.driver : 'null'}</div></Typography>
                        <Typography><div className="modName">modName - {editPageData.modName ? editPageData.modName : 'null'}</div></Typography>
                        <Typography><div className="mod-version">modVersion - {editPageData.modVersion ? editPageData.modVersion : 'null'}</div></Typography>
                        {editPageData.options?.length ?
                            <Typography><div className={classes.countVal}>options - {editPageData.options?.length ? editPageData.options.flatMap((item, index) =>
                                (!item.hasOwnProperty('merchantIdx')) ? 'null ' :
                                    <div key={index} className={classes.countVal}>
                                        <Button variant="contained" color="primary" className={classes.margin} onClick={() => setMerchantIdx(merchantIdx + 1)}>+</Button>
                                        <Typography><div className="count"><h4>{merchantIdx}</h4></div></Typography>
                                        <Button variant="contained" color="secondary" className={classes.margin} onClick={() => setMerchantIdx(merchantIdx - 1)}>-</Button>
                                    </div>
                            ) : 'null'}</div></Typography> :
                            ''}
                        <Typography><div className="port">port - {editPageData.port ? editPageData.port : 'null'}</div></Typography>
                        {editPageData.hasOwnProperty('status') ? <Typography><div className="status">status
                                - {editPageData.hasOwnProperty('status') ? editPageData.status : 'null'}</div></Typography> :
                            ''}
                        {editPageData.products?.length ?
                            <Typography><div className={classes.countVal}>products - {editPageData.products?.length ? mapProducts ? mapProducts?.map((item, index) => typeof item[0] !== 'object' ? "" :
                                <div key={index} className={classes.countVal}>
                                    <Button variant="contained" color="primary" className={classes.margin} onClick={increment}>+</Button>
                                    <Typography><div className="count"><h4>{isCount}</h4></div></Typography>
                                    <Button variant="contained" color="secondary" className={classes.margin} onClick={decrement}>-</Button>
                                </div>
                                )
                                : '' : ''}</div></Typography> :
                            ''}
                    </CardContent>
                </Card>
            </Grid>
        </Container>
    )
}

export default EditPage;