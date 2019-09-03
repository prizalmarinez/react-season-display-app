import React from 'react';
import { Card, Icon, Image, Container, Grid } from 'semantic-ui-react'

const SeasonDisplay = props => {

    const getSeason = (lat, month) => {
        if (month > 2 && month < 9) {
            return lat < 0 ? 'summer' : 'winter'
        } else {
            return lat > 0 ? 'winter' : 'summer'
        }
    }

    const seasonConfig = {
        summer: {
            text: 'Let\'s hit the beach!',
            iconName: 'sun',
            image: 'https://cdn3.vectorstock.com/i/1000x1000/26/22/outdoor-park-sunny-day-vector-23072622.jpg'
        },
        winter: {
            text: 'Brr, it\'s chilly!',
            iconName: 'snowflake',
            image: 'https://cdn2.vectorstock.com/i/1000x1000/44/86/cold-weather-girl-vector-20694486.jpg'
        }
    }

    const month = new Date().getMonth()

    const season = getSeason(props.lat, month),
        { text, iconName, image } = seasonConfig[season];

    return (
        <Container>
            <Grid centered>
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <Card fluid>
                            <Image src={image} wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>
                                    <Icon name={iconName} />
                                    {text}
                                </Card.Header>
                                <Card.Meta>
                                    <span className='date'>
                                        <Icon name="map pin" />
                                        Latitude: {props.lat}
                                    </span>
                                </Card.Meta>
                                <Card.Description>
                                    Month: {month}
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};

export default SeasonDisplay;