import { CareersList } from '@libs/stores/career';
import { Page, Text, View, Document, StyleSheet, Font, Image } from '@react-pdf/renderer';

Font.register({ family: 'NanumGothic', src: 'https://fonts.gstatic.com/ea/nanumgothic/v5/NanumGothic-Regular.ttf' });

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    fontFamily: 'NanumGothic',
    padding: 15,
  },
  careerListSection: {
    flexGrow: 1,
    backgroundColor: 'rgb(241, 241, 241, 0.5)',
    margin: '10px 0',
    padding: '15px',
  },
  profileImage: {
    borderRadius: '50%',
    width: '80%',
    margin: '0 auto',
    marginBottom: 15,
  },
  profileText: {
    fontSize: 11,
    marginTop: 3,
  },
});

const userInfo = {
  name: '김아무개',
  birthDate: '',
  email: 'anonymous@test.ac.kr',
  introduction: '',
  avatarUrl: '',
};

const careerNames = [
  { id: 1, text: '교내활동' },
  { id: 2, text: '교외활동' },
  { id: 3, text: '자격증' },
  { id: 4, text: '어학' },
];

// Create Document Component
const MainPageDocument = ({ careersList }: { careersList: CareersList }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View
          style={{
            margin: 10,
            padding: 10,
            width: '30%',
          }}
        >
          <Image style={styles.profileImage} src={'/images/avatar-default.png'} />
          <Text style={styles.profileText}>{userInfo.name}</Text>
          <Text style={styles.profileText}>{userInfo.birthDate}</Text>
          <Text style={styles.profileText}>{userInfo.email}</Text>
          <Text style={styles.profileText}>{userInfo.introduction}</Text>
        </View>
        <View style={styles.careerListSection}>
          {careerNames.map((careerName) => (
            <View
              key={careerName.id}
              style={{
                margin: '4 0',
              }}
            >
              <Text style={{ fontSize: 13, marginBottom: 5 }}>{careerName.text}</Text>
              <View>
                {/* 각 경력분류별 경력 리스트 출력 */}
                {careersList[careerName.text].map((career) => (
                  <View
                    key={career.actId}
                    style={{
                      display: 'flex',
                      fontSize: '10px',
                      width: '100%',
                      flexDirection: 'row',
                      marginBottom: 5,
                      paddingLeft: 15,
                    }}
                  >
                    <View
                      style={{
                        flexBasis: '50%',
                        maxWidth: '200px',
                      }}
                    >
                      <Text>{career.title}</Text>
                    </View>

                    <View
                      style={{
                        flexBasis: '15%',
                      }}
                    >
                      <Text>{career.trem}</Text>
                    </View>
                    <View
                      style={{
                        flexBasis: '10%',
                      }}
                    >
                      <Text>{career.agencyName}</Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default MainPageDocument;
