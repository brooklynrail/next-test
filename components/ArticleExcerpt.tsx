export default (props) => (<>
  <p dangerouslySetInnerHTML={{ __html: props.content }} />
  <style jsx>{`
    p {
      font-family: 'Untitled Serif', serif;
    }
  `}</style>
</>)