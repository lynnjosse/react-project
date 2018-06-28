import {connect}        from 'react-redux';
import RootComponent    from '../components/RootComponent';

const mapStateToProps = (state) => ({
    activeView: state.ActiveView
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(RootComponent);
