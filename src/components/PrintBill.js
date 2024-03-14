

import { Document, PDFDownloadLink, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import React from 'react';
import '../App.css';

const PrintBill = ({ fullName, mobileNumber, city, state, pincode, cart, total, discount }) => {
    const invoiceno=Math.floor(Math.random()*100);
    const MyDocument = (
        <Document>
            <Page style={styles.page}>
                <View style={styles.section}>
               <div className='two'>
               <Text style={{ fontSize: '25px', color: 'blue' }}>Big Bazaar</Text>
               </div>
                    <Text style={{ fontSize: '13px',padding:'5px'}}>Navlakha,Indore,452001</Text>
                    <Text style={{ fontSize: '12px',padding:'5px'}}>GSTIN: A23948HST54423</Text>
                    <Text style={{ fontSize: '12px' ,padding:'5px'}}>InvoiceNo:{invoiceno}</Text>
                    
                    <Text style={{ fontSize: '17px'}}>Shipping Address:</Text>
                    <Text style={{ fontSize: '12px'}}>{fullName}</Text>
                    <Text style={{ fontSize: '12px'}}>{mobileNumber}</Text>
                    <Text style={{ fontSize: '12px'}}>{city}, {state} - {pincode}</Text>
                </View>
                <View style={styles.section}>
                    <Text>Items:</Text>
                    <View style={styles.table}>
                    <View style={styles.tableRow}>
                  <Text style={[styles.tableHeader, { marginRight: 60 }]}>Sno.</Text>
                  <Text style={[styles.tableHeader, { marginRight: 60 }]}>Name</Text>
                  <Text style={[styles.tableHeader, { marginRight: 60 }]}>Quantity</Text>
                  <Text style={[styles.tableHeader, { marginLeft: 60 }]}>Price</Text>
                 </View>

                        {cart.map((item, index) => (
                           <View style={styles.tableRow} key={index}>
                           <Text style={[styles.tableCell, { marginRight: 40, fontSize: '13px' }]}>{index + 1}</Text> {/* Serial number */}
                           <Text style={[styles.tableCell, { marginRight: 60 ,fontSize: '13px' }]}>{item.cart}</Text>
                           <Text style={[styles.tableCell, { marginRight: 60, fontSize: '13px'}]}>{item.name}</Text>
                           <Text style={[styles.tableCell, { marginRight: 60, fontSize: '13px'}]}>{item.quantity}</Text>
                           <Text style={[styles.tableCell,{ fontSize:'13px',marginLeft: 60}]}>Rs. {item.price * item.quantity}</Text>
                       </View>
                       
                        ))}
                    </View>
                </View>
                <View style={styles.section}>
                    <Text id="last">Total: Rs. {total}</Text>
                    <Text style="font-size: 13px;">Discount: Rs. {discount}</Text>
                    <Text style="font-size: 13px;fontsize: small;">Discounted Total: Rs. {total - discount}</Text>
                </View>
            </Page>
        </Document>
    );

    return (
        <PDFDownloadLink document={MyDocument} fileName="invoice.pdf">
            {({ blob, url, loading, error }) =>
                loading ? 'Loading document...' : 'Print Bill'
            }
        </PDFDownloadLink>
    );
};


const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        padding: 20
    },
    section: {
        marginBottom: 10,
        fontSize:13,
    },
    table: {
        display: 'table',
        width: '100%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#bfbfbf'
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#bfbfbf',
        alignItems: 'center',
        
    },
    tableHeader: {
        backgroundColor: '#f2f2f2',
        padding: 5,
        fontWeight: 'bold'
    }
});

export default PrintBill;

