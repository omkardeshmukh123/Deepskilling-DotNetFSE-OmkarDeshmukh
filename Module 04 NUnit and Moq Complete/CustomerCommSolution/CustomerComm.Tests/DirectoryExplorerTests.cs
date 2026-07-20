using MagicFilesLib;
using Moq;
using NUnit.Framework;

namespace DirectoryExplorer.Tests
{
    [TestFixture]
    public class DirectoryExplorerTests
    {
        private Mock<IDirectoryExplorer> mockDirectoryExplorer;

        private readonly string _file1 = "file.txt";
        private readonly string _file2 = "file2.txt";

        [OneTimeSetUp]
        public void Init()
        {
            mockDirectoryExplorer = new Mock<IDirectoryExplorer>();
        }

        [TestCase]
        public void GetFiles_ShouldReturnMockFiles()
        {
            var files = new List<string>
            {
                _file1,
                _file2
            };

            mockDirectoryExplorer
                .Setup(x => x.GetFiles(It.IsAny<string>()))
                .Returns(files);

            var result = mockDirectoryExplorer.Object.GetFiles("C:\\");

            Assert.That(result, Is.Not.Null);
            Assert.That(result.Count, Is.EqualTo(2));
            Assert.That(result.Contains(_file1), Is.True);
        }
    }
}