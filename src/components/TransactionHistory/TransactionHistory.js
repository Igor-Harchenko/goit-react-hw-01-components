import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({
    items
}) => {
    return (
        <table className={styles.transaction}>
            <thead className={styles.head}>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => (
                <tr key={item.id}>
                    <td className={styles.td}>{item.type}</td>
                    <td className={styles.td}>{item.amount}</td>
                    <td className={styles.td}>{item.currency}</td>
                </tr>
                ))}
            </tbody>
        </table>
    );
    }

TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
}; 

export default TransactionHistory;