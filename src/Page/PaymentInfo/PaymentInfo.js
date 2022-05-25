import { Box, Button, Divider, Grid, Modal, Typography } from '@mui/material';
import React, { useState } from 'react';
import Visa from '../../Assets/visa.png';
import Mastercard from '../../Assets/mastercard.png';
import CheckCircle from '../../Assets/check_circle.png';
import Amex from '../../Assets/amex.png';
import Discover from '../../Assets/discover.png';
import './PaymentInfo.css';
import { Link } from 'react-router-dom';
import { paymentMethods } from '../../datas/datas';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "50%",
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const PaymentInfo = () => {

  const [defaultPymnt, setDefaultPymnt] = useState("**************6312");
  const [open, setOpen] = useState(false)
  const [values, setValues] = useState({
      cardType: "", cardNumber: "", firstName: "", lastName: "", expDate: ""
  })

  const { cardType, cardNumber, firstName, lastName, expDate } = values;

  const handleOpen = () => {
      setOpen(true)
  }

  const handleClose = () => {
      setOpen(false)
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      console.log(values);
      paymentMethods.push(values);
      handleClose();
  }

  return (
    <>
        <h2>Payment Information</h2>
        <br/>
        <div style={{display:"flex"}}>
            <span style={{flexGrow:"1", display:"flex", alignItems:"flex-end", justifyContent:"flex-start"}}>Default Payment Method</span>
            <div>
                <Button
                 variant='contained' 
                 size='small' 
                 style={{textTransform:"none", backgroundColor:"#2D5566"}}
                 onClick={handleOpen}
                >
                    Add New Card
                </Button>
                <Modal open={open} onClose={handleClose}>
                    <Box sx={style}>
                        Add New Card
                        <Divider style={{margin:"10px 0"}}/>
                        <div style={{width:"100%"}}>
                            <div className='modal-input-no'>
                                <div style={{display:"flex"}}>
                                    <div style={{flexGrow:"1"}}>Card Number*</div>
                                    <img
                                     src={Amex} 
                                     alt="card" 
                                     className={ values.cardType === "Amex" ? "modal-card-selected" : "modal-card-unselected" }
                                     onClick={()=>setValues({
                                         ...values,
                                         cardType: "Amex"
                                     })}
                                    />
                                    <img
                                     src={Discover} 
                                     alt="card" 
                                     className={ values.cardType === "Discover" ? "modal-card-selected" : "modal-card-unselected" }
                                     onClick={()=>setValues({
                                         ...values,
                                         cardType: "Discover"
                                     })}
                                    />
                                    <img
                                     src={Mastercard} 
                                     alt="card" 
                                     className={ values.cardType === "Mastercard" ? "modal-card-selected" : "modal-card-unselected" }
                                     onClick={()=>setValues({
                                         ...values,
                                         cardType: "Mastercard"
                                     })}
                                    />
                                    <img
                                     src={Visa} 
                                     alt="card" 
                                     className={ values.cardType === "Visa" ? "modal-card-selected" : "modal-card-unselected" }
                                     onClick={()=>setValues({
                                         ...values,
                                         cardType: "Visa"
                                     })}
                                    />
                                </div>
                                <div style={{marginTop:"13px"}}>
                                    <input
                                     type="text"
                                     style={{border:"1px solid #C8B9AB", borderRadius:"5px", height:"35px", width:"100%"}}
                                     value={cardNumber}
                                     onChange={(e)=>setValues({
                                         ...values,
                                         cardNumber: e.target.value
                                     })}
                                    />
                                </div>
                            </div>
                            <div className='modal-dt-cvv-con'>
                                <div className='modal-input-dt'>
                                    <div>Expirary Date*</div>
                                    <div style={{marginTop:"13px"}}>
                                        <input
                                         type="text" 
                                         style={{border:"1px solid #C8B9AB", borderRadius:"5px", height:"35px", width:"100%"}}
                                         value={expDate}
                                         onChange={(e)=>setValues({
                                            ...values,
                                            expDate: e.target.value
                                         })}
                                        />
                                    </div>
                                </div>
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                <div className='modal-input-cvv'>
                                    <div>CVV*</div>
                                    <div style={{marginTop:"13px"}}>
                                        <input type="password" style={{border:"1px solid #C8B9AB", borderRadius:"5px", height:"35px", width:"100%"}}/>
                                    </div>
                                </div>
                            </div>
                            <div className='modal-input-name'>
                                <div>Name on Card*</div>
                                <div style={{marginTop:"13px", display:"flex"}}>
                                    <input
                                     type="text" 
                                     placeholder='First Name' 
                                     style={{border:"1px solid #C8B9AB", borderRadius:"5px", height:"35px", width:"100%"}}
                                     value={firstName}
                                     onChange={(e)=>setValues({
                                        ...values,
                                        firstName: e.target.value
                                     })}
                                    />
                                    &nbsp;
                                    &nbsp;
                                    &nbsp;
                                    &nbsp;
                                    <input
                                     type="text" 
                                     placeholder='Last Name' 
                                     style={{border:"1px solid #C8B9AB", borderRadius:"5px", height:"35px", width:"100%"}}
                                     value={lastName}
                                     onChange={(e)=>setValues({
                                        ...values,
                                        lastName: e.target.value
                                     })}
                                    />
                                </div>
                            </div>
                            <div className='modal-input-name'>
                                <input type="checkbox"/>
                                &nbsp;
                                <label>Make this my default credit card</label>
                            </div>
                        </div>
                        <Divider style={{padding:"20px 0", margin:"15px 0"}}/>
                        <div style={{float:"right"}}>
                            <Button
                             variant='outlined' 
                             size='small' 
                             style={{textTransform:"none", borderColor:"#2D5566", color:"#2D5566"}}
                              onClick={handleClose}
                            >Cancel</Button>
                            &nbsp;
                            &nbsp;
                            <Button
                             variant='contained' 
                             size='small' 
                             style={{textTransform:"none", backgroundColor:"#2D5566"}}
                             onClick={handleSubmit}
                            >Add Card</Button>
                        </div>
                    </Box>
                </Modal>
            </div>
        </div>
        <Divider style={{margin:"10px 0"}}/>
        <Grid container gap={5}>
            { paymentMethods.map(( data ) => {
                if( data.cardNumber === defaultPymnt ){
                    return (
                        <Grid item style={{fontSize:"13px", border:"3px solid #2D5566", borderRadius:"5px", padding:"8px"}}>
                            <img
                             src={ 
                                data.cardType === "Visa" ?
                                 Visa : 
                                 data.cardType === "Mastercard" ?
                                  Mastercard : 
                                  data.cardType === "Amex" ?
                                   Amex : 
                                   data.cardType === "Discover" ?
                                    Discover : 
                                    null 
                                } 
                             alt="card"
                            />
                            <Divider/>
                            <div className='card-content-container'>
                                <div className='card-content'>
                                    <Typography style={{fontSize:"13px"}}>Card Type</Typography>
                                    <Typography style={{fontSize:"13px"}}>Card Number</Typography>
                                    <Typography style={{fontSize:"13px"}}>Name on Card</Typography>
                                    <Typography style={{fontSize:"13px"}}>Expiration Date</Typography>
                                </div>
                                <div className='card-content'>
                                    <Typography style={{textAlign:"right",fontSize:"13px"}}>{data.cardType}</Typography>
                                    <Typography style={{textAlign:"right",fontSize:"13px"}}>{data.cardNumber}</Typography>
                                    <Typography style={{textAlign:"right",fontSize:"13px"}}>{data.firstName}&nbsp;{data.lastName}</Typography>
                                    <Typography style={{textAlign:"right",fontSize:"13px"}}>{data.expDate}</Typography>
                                </div>
                            </div>
                            <Divider/>
                            <div style={{padding:"10px 0", display:"flex"}}>
                                <div style={{display:"flex", flexGrow:"1"}}>
                                    <div><img src={CheckCircle} alt="checkCircle" style={{width:"13px", height:"13px"}}/></div>
                                    &nbsp;
                                    <div>Default</div>
                                </div>
                                <div style={{display:"flex"}}>
                                    <Link to="#" className='card-link'>Edit</Link>
                                    <div className='card-link'>|</div>
                                    <Link to="#" className='card-link'>Remove</Link>
                                </div>
                            </div>
                        </Grid>
                    )
                }})}
        </Grid>
        <br/><br/>
        <div style={{display:"flex"}}>
            <span style={{flexGrow:"1", display:"flex", alignItems:"flex-end", justifyContent:"flex-start"}}>Other Payment Methods</span>
        </div>
        <Divider style={{margin:"10px 0"}}/>
        <Grid container gap={5} style={{width:"100%"}}>
            { paymentMethods.map(( data ) => {
                if( data.cardNumber !== defaultPymnt ){
                    return (
                        <Grid item style={{fontSize:"13px", border:"1px solid #C8B9AB", borderRadius:"5px", padding:"8px"}}>
                            <img
                             src={ 
                                data.cardType === "Visa" ?
                                 Visa : 
                                 data.cardType === "Mastercard" ?
                                  Mastercard : 
                                  data.cardType === "Amex" ?
                                   Amex : 
                                   data.cardType === "Discover" ?
                                    Discover : 
                                    null 
                                } 
                             alt="card"
                            />
                            <Divider/>
                            <div className='card-content-container'>
                                <div className='card-content'>
                                    <Typography style={{fontSize:"13px"}}>Card Type</Typography>
                                    <Typography style={{fontSize:"13px"}}>Card Number</Typography>
                                    <Typography style={{fontSize:"13px"}}>Name on Card</Typography>
                                    <Typography style={{fontSize:"13px"}}>Expiration Date</Typography>
                                </div>
                                <div className='card-content'>
                                    <Typography style={{textAlign:"right",fontSize:"13px"}}>{data.cardType}</Typography>
                                    <Typography style={{textAlign:"right",fontSize:"13px"}}>{data.cardNumber}</Typography>
                                    <Typography style={{textAlign:"right",fontSize:"13px"}}>{data.firstName}&nbsp;{data.lastName}</Typography>
                                    <Typography style={{textAlign:"right",fontSize:"13px"}}>{data.expDate}</Typography>
                                </div>
                            </div>
                            <Divider/>
                            <div style={{padding:"10px 0", display:"flex"}}>
                                <div style={{display:"flex", flexGrow:"1"}}>
                                    <div
                                     style={{width:"13px", height:"13px", borderRadius:"50%", border:"1px solid #A99868", cursor:"pointer"}}
                                     onClick={()=>setDefaultPymnt(`${data.cardNumber}`)}
                                    ></div>
                                    &nbsp;
                                    <div>Make Default</div>
                                </div>
                                <div style={{display:"flex"}}>
                                    <Link to="#" className='card-link'>Edit</Link>
                                    <div className='card-link'>|</div>
                                    <Link to="#" className='card-link'>Remove</Link>
                                </div>
                            </div>
                        </Grid>
                    )
                }})}
        </Grid>
    </>
  )
}

export default PaymentInfo