import user from '../data/user.json';
import { Profile } from './Profile/Profile';
import data from '../data/data.json';
import { Statistics } from './Statistics/Statistics';
import friends from '../data/friends.json';
import { FriendList } from './Friends/FriendList/FriendList';
import transactions from '../data/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Section } from './Section';

export const App = () => {
  return (
    <Section
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Section>
  );
};
