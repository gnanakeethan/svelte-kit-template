<script>
    import API, {graphqlOperation} from '@aws-amplify/api';
    import awsmobile from './../aws-exports.js';
    import {listSurveyss} from './../graphql/queries';
    import {onMount} from 'svelte';

    API.configure(awsmobile);
    onMount(getTodos);

    function getTodos() {
        return API.graphql(graphqlOperation(listSurveyss)).then(({data}) => {
            console.log(data);
        })
    }

</script>

<div>Testing</div>
